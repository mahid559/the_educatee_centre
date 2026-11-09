"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Maximize2 } from "lucide-react";

export interface JustifiedImageItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
  categoryLabel?: string;
  tagline?: string;
}

interface JustifiedGalleryProps {
  items: JustifiedImageItem[];
  gap?: number;
  onItemClick?: (index: number) => void;
  priorityFirstRow?: boolean;
}

export function JustifiedGallery({
  items,
  gap = 16,
  onItemClick,
  priorityFirstRow = false,
}: JustifiedGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(1200);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => {
      const w = el.getBoundingClientRect().width;
      if (w > 0) {
        setContainerWidth(w);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        if (w > 0) {
          setContainerWidth(w);
        }
      }
    });

    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, []);

  // Compute breakpoints and target params
  const { minItemsPerRow, maxItemsPerRow, targetHeight, currentGap } =
    useMemo(() => {
      if (containerWidth < 640) {
        // Mobile
        return {
          minItemsPerRow: 1,
          maxItemsPerRow: 2,
          targetHeight: 190,
          currentGap: Math.min(gap, 10),
        };
      } else if (containerWidth < 1024) {
        // Tablet
        return {
          minItemsPerRow: 2,
          maxItemsPerRow: 3,
          targetHeight: 230,
          currentGap: Math.min(gap, 14),
        };
      } else {
        // Desktop
        const maxK = items.length <= 5 ? 3 : 4;
        const minK = items.length <= 5 ? 2 : 3;
        return {
          minItemsPerRow: minK,
          maxItemsPerRow: maxK,
          targetHeight: 260,
          currentGap: gap,
        };
      }
    }, [containerWidth, gap, items.length]);

  // Dynamic programming algorithm to partition items into rows that fill full container width
  const rows = useMemo(() => {
    const n = items.length;
    if (n === 0) return [];

    const ratios = items.map((item) =>
      item.width && item.height ? item.width / item.height : 1.33
    );

    if (n <= minItemsPerRow) {
      const sumR = ratios.reduce((a, b) => a + b, 0);
      const h = (containerWidth - (n - 1) * currentGap) / sumR;
      return [
        {
          indices: Array.from({ length: n }, (_, i) => i),
          height: Math.max(140, Math.min(h, 520)),
        },
      ];
    }

    const dp = new Array(n + 1).fill(Infinity);
    const parent = new Array(n + 1).fill(0);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
      for (let k = minItemsPerRow; k <= maxItemsPerRow; k++) {
        const j = i - k;
        if (j < 0) continue;
        if (dp[j] === Infinity) continue;

        let sumR = 0;
        for (let m = j; m < i; m++) {
          sumR += ratios[m];
        }

        const h = (containerWidth - (k - 1) * currentGap) / sumR;
        const diff = h - targetHeight;
        // Cost penalizes deviating from targetHeight
        const cost = diff * diff;

        if (dp[j] + cost < dp[i]) {
          dp[i] = dp[j] + cost;
          parent[i] = j;
        }
      }
    }

    // Fallback if strict DP couldn't partition (e.g. constraints mismatch)
    if (dp[n] === Infinity) {
      const fallbackRows: { indices: number[]; height: number }[] = [];
      let curIndices: number[] = [];
      let curSumR = 0;

      for (let i = 0; i < n; i++) {
        curIndices.push(i);
        curSumR += ratios[i];
        const h =
          (containerWidth - (curIndices.length - 1) * currentGap) / curSumR;
        const remaining = n - (i + 1);

        if (
          (curIndices.length >= minItemsPerRow && h <= targetHeight * 1.15) ||
          curIndices.length >= maxItemsPerRow ||
          remaining === 0
        ) {
          if (
            remaining > 0 &&
            remaining < minItemsPerRow &&
            curIndices.length < maxItemsPerRow
          ) {
            continue;
          }
          fallbackRows.push({
            indices: [...curIndices],
            height: Math.max(140, Math.min(h, 520)),
          });
          curIndices = [];
          curSumR = 0;
        }
      }
      if (curIndices.length > 0) {
        const h =
          (containerWidth - (curIndices.length - 1) * currentGap) / curSumR;
        fallbackRows.push({
          indices: curIndices,
          height: Math.max(140, Math.min(h, 520)),
        });
      }
      return fallbackRows;
    }

    // Reconstruct optimal rows
    const rowChunks: { indices: number[]; height: number }[] = [];
    let curr = n;
    while (curr > 0) {
      const prev = parent[curr];
      const indices: number[] = [];
      let sumR = 0;
      for (let m = prev; m < curr; m++) {
        indices.push(m);
        sumR += ratios[m];
      }
      const h = (containerWidth - (indices.length - 1) * currentGap) / sumR;
      rowChunks.unshift({
        indices,
        height: Math.max(140, Math.min(h, 520)),
      });
      curr = prev;
    }

    return rowChunks;
  }, [
    items,
    containerWidth,
    currentGap,
    minItemsPerRow,
    maxItemsPerRow,
    targetHeight,
  ]);

  return (
    <div ref={containerRef} className="w-full">
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className="flex flex-row items-center w-full"
          style={{
            height: `${Math.round(row.height)}px`,
            gap: `${currentGap}px`,
            marginBottom:
              rowIdx < rows.length - 1 ? `${currentGap}px` : "0px",
          }}
        >
          {row.indices.map((itemIdx) => {
            const item = items[itemIdx];
            const ratio =
              item.width && item.height ? item.width / item.height : 1.33;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0.05 : 0.35,
                  delay: shouldReduceMotion ? 0 : (itemIdx % 6) * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => onItemClick?.(itemIdx)}
                style={{
                  flex: `${ratio} 1 0%`,
                  height: "100%",
                  position: "relative",
                }}
                className="rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E2E9EB]/90 bg-slate-100"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder={item.blurDataURL ? "blur" : "empty"}
                    blurDataURL={item.blurDataURL}
                    priority={priorityFirstRow && rowIdx === 0}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Soft Dark Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-between p-4 sm:p-5">
                    <div className="flex justify-end">
                      <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>

                    {(item.categoryLabel || item.tagline) && (
                      <div>
                        {item.categoryLabel && (
                          <span className="inline-block bg-[#E51937] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm mb-1 font-[var(--font-jost)]">
                            {item.categoryLabel}
                          </span>
                        )}
                        {item.tagline && (
                          <p className="text-white text-xs sm:text-sm font-bold line-clamp-1 drop-shadow-sm font-[var(--font-jost)]">
                            {item.tagline}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

