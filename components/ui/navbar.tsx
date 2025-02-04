"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { IconShoppingBag, IconTrash } from "@tabler/icons-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const links = [
    {
      title: "Vaze & Pahare",
      href: "/magazin?filter=vaze-pahare",
      description: "Elegante și practice, perfecte pentru decor și servire.",
    },
    {
      title: "Obiecte Decorative",
      href: "/magazin?filter=decoratiuni",
      description:
        "Accesorii unice pentru a adăuga personalitate spațiului tău.",
    },
    {
      title: "Servire & Dining",
      href: "/magazin?filter=dining",
      description:
        "Articole esențiale pentru mese rafinate și servire impecabilă.",
    },
    {
      title: "Vintage & Retro",
      href: "/magazin?filter=vintage-retro",
      description: "Colecții cu un aer nostalgic, pline de farmec și stil.",
    },
    {
      title: "Lenjerii de pat",
      href: "/magazin?filter=lenjerii",
      description: "Confort și eleganță pentru un somn odihnitor.",
    },
    {
      title: "Idei de Cadou",
      href: "/magazin?filter=cadou",
      description: "Cadouri speciale pentru orice ocazie și persoană dragă.",
    },
  ];

  const fakeCartItems = [
    {
      id: 1,
      name: "Vaza Ceramica",
      price: "120 RON",
      quantity: 1,
      image: "https://scontent.fcnd1-1.fna.fbcdn.net/v/t39.30808-6/470197709_122205364208225139_7685220243907591974_n.jpg?stp=cp6_dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mbQ_I5iWUWkQ7kNvgEusH8l&_nc_oc=Adirlv-2EKEOE9tC3i4ayYFnB7n9mPPe8mH8ep3fim9aatfymAKS4dwi6UnzBewoA6w&_nc_zt=23&_nc_ht=scontent.fcnd1-1.fna&_nc_gid=AXRC62Jqzn7CsKJaT_iN4La&oh=00_AYCPzoqQiBOXXrhJpBfYOet_4-lc86Fw9qR8WM0qtpfAyQ&oe=67A7DA8F",
    },
    {
      id: 2,
      name: "Set Pahare Sticla",
      price: "250 RON",
      quantity: 2,
      image: "https://scontent.fcnd1-1.fna.fbcdn.net/v/t39.30808-6/470197709_122205364208225139_7685220243907591974_n.jpg?stp=cp6_dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mbQ_I5iWUWkQ7kNvgEusH8l&_nc_oc=Adirlv-2EKEOE9tC3i4ayYFnB7n9mPPe8mH8ep3fim9aatfymAKS4dwi6UnzBewoA6w&_nc_zt=23&_nc_ht=scontent.fcnd1-1.fna&_nc_gid=AXRC62Jqzn7CsKJaT_iN4La&oh=00_AYCPzoqQiBOXXrhJpBfYOet_4-lc86Fw9qR8WM0qtpfAyQ&oe=67A7DA8F",
    },
    {
      id: 3,
      name: "Tablou Handmade",
      price: "300 RON",
      quantity: 1,
      image: "https://scontent.fcnd1-1.fna.fbcdn.net/v/t39.30808-6/470197709_122205364208225139_7685220243907591974_n.jpg?stp=cp6_dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mbQ_I5iWUWkQ7kNvgEusH8l&_nc_oc=Adirlv-2EKEOE9tC3i4ayYFnB7n9mPPe8mH8ep3fim9aatfymAKS4dwi6UnzBewoA6w&_nc_zt=23&_nc_ht=scontent.fcnd1-1.fna&_nc_gid=AXRC62Jqzn7CsKJaT_iN4La&oh=00_AYCPzoqQiBOXXrhJpBfYOet_4-lc86Fw9qR8WM0qtpfAyQ&oe=67A7DA8F",
    },
  ];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element | null;

      if (
        isOpen &&
        target &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-primary">
        Maison Blanche
      </Link>

      <div className="hidden md:flex gap-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/magazin" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Magazin
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categorii</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {links.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/despre-noi" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Despre noi
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden md:flex space-x-2">
          <ModeToggle />
          <Link href="/login">
            <Button variant="outline">Logheaza-te</Button>
          </Link>
        </div>
        {isDesktop ? (
          <Dialog open={cartOpen} onOpenChange={setCartOpen}>
            <DialogTrigger asChild>
              <div className="mx-4 cursor-pointer focus:outline-none">
                <IconShoppingBag size={24} color="#C08081	" />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Cosul meu</DialogTitle>
                <DialogDescription>
                  Lista cu produsele din cos
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-2">
                {fakeCartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    {/* Product Image & Details */}
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-md object-cover"
                      />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.quantity} x {item.price}
                        </p>
                      </div>
                    </div>

                    {/* Remove Item Button */}
                    <Button variant="ghost" size="icon">
                      <IconTrash className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </div>
              <DialogFooter>
                <Link href="/cosul-meu">
                  <Button>Vezi detalii cosul meu</Button>
                </Link>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ) : (
          <Drawer open={cartOpen} onOpenChange={setCartOpen}>
            <DrawerTrigger asChild>
              <div className="mr-6">
                <IconShoppingBag size={24} color="#C08081	" />
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Cosul meu</DrawerTitle>
                <DrawerDescription>
                  Lista cu produsele din cos
                </DrawerDescription>
              </DrawerHeader>
              <div className="space-y-1 px-4">
                {fakeCartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    {/* Product Image & Details */}
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-md object-cover"
                      />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.quantity} x {item.price}
                        </p>
                      </div>
                    </div>

                    {/* Remove Item Button */}
                    <Button variant="ghost" size="icon">
                      <IconTrash className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </div>
              <DrawerFooter>
                <Link href="/cosul-meu" className="flex justify-center">
                  <Button className="w-full">Vezi cosul meu</Button>
                </Link>
                <DrawerClose asChild>
                  <Button variant="outline">Inchide</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        )}
        {/* Mobile Menu Button */}
        <div
          className="md:hidden menu-button z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            className="relative flex flex-col items-center gap-1"
          >
            <motion.div
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 3 },
              }}
              className="w-6 h-0.5 bg-primary"
            />
            <motion.div
              variants={{
                closed: { rotate: 0, y: 6 },
                open: { rotate: -45, y: -3 },
              }}
              className="w-6 h-0.5 bg-primary"
            />
          </motion.div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-64 bg-background border-l shadow-lg p-6 flex flex-col gap-4 z-40 mobile-menu"
          >
            <div className="mt-11 flex flex-col flex-grow space-y-3">
              <Link href="/login">
                <Button variant="outline">Logheaza-te</Button>
              </Link>
              <Link
                href="/magazin"
                className="hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                Magazin
              </Link>
              <div className="ml-4 flex flex-col gap-1">
                {links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="px-3 py-2 hover:bg-muted rounded-md transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <Link
                href="/despre-noi"
                className="hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                Despre noi
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
            <div className="mt-auto">
              <ModeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

type ListItemProps = {
  title: string;
  href: string;
  children: React.ReactNode;
};

const ListItem: React.FC<ListItemProps> = ({ title, href, children }) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
);
