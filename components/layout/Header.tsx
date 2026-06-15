"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { company, navLinks } from "@/lib/company";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-border-brand/80 bg-background/90 backdrop-blur-lg"
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="group flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Image
                src="/logo.png"
                alt={`${company.name} logo`}
                width={44}
                height={44}
                className="h-10 w-10 object-contain"
                priority
              />
            </motion.div>
            <div className="hidden sm:block">
              <span className="font-display text-xl font-semibold leading-none text-ink">
                FleetEx
              </span>
              <span className="mt-0.5 block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted">
                Logistics
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ink/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button href="/contact" variant="primary" className="!px-6 !py-3">
              Request Quote
            </Button>
          </motion.div>

          <button
            type="button"
            className="p-2 text-ink lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border-brand bg-background lg:hidden"
          >
            <Container>
              <nav className="flex flex-col py-6" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className="block border-b border-border-brand/60 py-4 text-sm font-medium uppercase tracking-[0.12em] text-ink"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="pt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <Button href="/contact" variant="primary" className="w-full">
                    Request Quote
                  </Button>
                </motion.div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
