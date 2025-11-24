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

// Removed underline hover animation per request

export default function Navbar() {
  const router = useRouter();
  const navLinks = [
    { href: "/new-arrivals", label: "New Arrivals" },
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
            Tashok Threads
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
            <motion.div
              key={l.href}
              variants={linkItem}
              initial="rest"
              animate="rest"
              whileHover={{
                backgroundColor: "#F3F4F6",
                scale: 1.05,
                color: "#EC4899",
              }}
              transition={{ duration: 0.45}}
              className="px-3 py-1 rounded-md inline-block cursor-pointer"
            >
              <Link
                href={l.href}
                className="text-foreground/80 hover:text-foreground"
                style={{ display: "inline-block", width: "100%" }}
              >
                {l.label}
              </Link>
            </motion.div>
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
