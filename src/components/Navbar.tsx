"use client";

import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import { useRouter } from "next/navigation";

const container = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const linksStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const linkItem = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  rest: { opacity: 1, y: 0 },
  hover: { y: -2 },
};

// Use width animation for maximum compatibility/visibility
const underline = {
  rest: { width: 0 },
  hover: { width: "100%", transition: { duration: 0.25 } },
};

export default function Navbar() {
  const router = useRouter();
  const navLinks = [
    { href: "/products", label: "Products" },
    { href: "/categories", label: "Categories" },
    { href: "/cart", label: "Cart" },
    { href: "/faq", label: "FAQ" },
    { href: "/account", label: "Login" },
  ];

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get("search") as string;
    router.push(`/products?search=${searchQuery}`);
  };

  return (
    <motion.nav
      className="w-full bg-background shadow-md border-b border-border px-4 py-3 flex items-center justify-between sticky top-0 z-50"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Link href="/" className="text-2xl font-extrabold text-pink-500 tracking-wide">
            TrendyWear
          </Link>
        </motion.div>

        {/* NAV LINKS */}
        <motion.div
          className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end w-full md:w-auto"
          variants={linksStagger}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((l) => (
            <motion.span
              key={l.href}
              variants={linkItem}
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="relative inline-block"
            >
              <Link href={l.href} className="text-foreground/80 hover:text-foreground">
                {l.label}
              </Link>
              <motion.span
                className="absolute left-0 bottom-0 h-0.5 bg-pink-500 w-full origin-left"
                variants={underline}
              />
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* RIGHT SIDE: SEARCH BAR */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <form className="flex w-full md:w-auto items-center gap-2" onSubmit={handleSearch}>
          <div className="w-full md:w-64">
            <Input type="text" name="search" placeholder="Search products..." className="w-full md:w-64" />
          </div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button type="submit" variant="secondary">Search</Button>
          </motion.div>
        </form>
        {/* Dark mode toggle, appended without changing positions of existing items */}
        <DarkModeToggle />
      </motion.div>
    </motion.nav>
  );
}
