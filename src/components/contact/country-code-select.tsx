"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { COUNTRY_CODES } from "@/lib/country-codes";
import { ChevronDown } from "lucide-react";

interface CountryCodeSelectProps {
  value: string;
  onChange: (value: string) => void;
  id?: string;
  "aria-invalid"?: boolean;
}

export function CountryCodeSelect({
  value,
  onChange,
  id,
  "aria-invalid": ariaInvalid,
}: CountryCodeSelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = COUNTRY_CODES.find((c) => c.code === value);
  const displayText = selected ? selected.dial : "";

  const filtered = search.startsWith("+")
    ? COUNTRY_CODES.filter((c) => c.dial.startsWith(search))
    : COUNTRY_CODES.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.dial.includes(search) ||
          c.code.toLowerCase().includes(search.toLowerCase()),
      );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const select = useCallback(
    (code: string) => {
      onChange(code);
      setOpen(false);
      setSearch("");
    },
    [onChange],
  );

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        id={id}
        aria-invalid={ariaInvalid}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((p) => !p)}
        className="flex h-10 w-fit min-w-[90px] items-center gap-1 whitespace-nowrap rounded-lg border border-input bg-transparent px-2 py-2 text-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
      >
        <span className="flex-1 truncate text-left">{displayText}</span>
        <ChevronDown className={`size-3.5 shrink-0 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 max-h-60 w-[300px] overflow-hidden rounded-lg border border-border bg-background shadow-lg">
          <div className="border-b border-border p-1">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search country or dial code..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 w-full rounded-md border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
              autoFocus
            />
          </div>
          <ul role="listbox" className="overflow-y-auto" style={{ maxHeight: "208px" }}>
            {filtered.length === 0 ? (
              <li className="px-3 py-4 text-center text-sm text-muted-foreground">
                No countries found
              </li>
            ) : (
              filtered.map((c) => (
                <li
                  key={c.code}
                  role="option"
                  aria-selected={c.code === value}
                  onClick={() => select(c.code)}
                  className={`flex cursor-pointer items-center justify-between px-3 py-2 text-sm transition-colors hover:bg-accent/10 ${
                    c.code === value ? "bg-accent/10 font-medium" : ""
                  }`}
                >
                  <span>{c.name}</span>
                  <span className="text-muted-foreground">{c.dial}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
