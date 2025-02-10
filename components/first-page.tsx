"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconPhone,
} from "@tabler/icons-react";

const FirstPage = () => {
  const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];

  const products = [
    {
      title: "Decoratiune ren",
      price: 150,
      image: "/images/ren.jpg",
    },
    {
      title: "Aranjament argintiu",
      price: 190,
      image: "/images/argintiu.jpg",
    },
    {
      title: "Aranjament ursi",
      price: 150,
      image: "/images/ursi.jpg",
    },
    {
      title: "Aranjament ren mov",
      price: 150,
      image: "/images/ren-mov.jpg",
    },
    {
      title: "Oameni de zapada",
      price: 90,
      image: "/images/snowmen.jpg",
    },
    {
      title: "Lumanare glob",
      price: 90,
      image: "/images/glob.jpg",
    },
  ];
  return (
    <div className="flex flex-col">
      {/* Slider imagini */}

      <ImagesSlider
        className="h-[30rem] md:h-[40rem]"
        images={images}
        direction="down"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Locul unde fiecare cadou <br /> spune o poveste
          </motion.p>
        </motion.div>
      </ImagesSlider>

      {/* Produse populare */}

      <div className="flex flex-col justify-center items-center my-2 md:my-10 relative">
        <p className="font-bold text-xl md:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary py-4">
          Produse populare
        </p>
        <div className="relative w-full max-w-7xl p-4">
          <Carousel opts={{ align: "start" }} className="relative">
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem
                  key={product.title}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-4">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg group">
                      {/* Background Image with Dim Effect */}
                      <Image
                        src={product.image}
                        fill
                        alt={product.title}
                        className="object-cover w-full h-full group-hover:brightness-90 transition-all"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all rounded-xl" />

                      {/* Text Content */}
                      <div className="absolute inset-0 flex flex-col justify-center items-center px-6">
                        <h3 className="text-2xl text-white font-bold">
                          {product.title}
                        </h3>
                        <p className="text-lg text-white font-semibold mt-2 bg-transparent px-3 py-1 rounded-md">
                          {product.price} RON
                        </p>
                        <Button variant="outline" className="mt-4 px-6">
                          Cumpara
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Positioned Navigation Buttons */}
            <div className="absolute bottom-[-2.5rem] left-1/2 transform -translate-x-1/2 flex gap-4">
              <CarouselPrevious className="bg-primary text-white hover:bg-secondary w-12 h-12 rounded-full shadow-md" />
              <CarouselNext className="bg-primary text-white hover:bg-secondary w-12 h-12 rounded-full shadow-md" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Produse noi */}

      <div className="flex flex-col justify-center items-center my-2 md:my-10 relative">
        <p className="font-bold text-xl md:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary py-4">
          Produse Noi
        </p>
        <div className="relative w-full max-w-7xl p-4">
          <Carousel opts={{ align: "start" }} className="relative">
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem
                  key={product.title}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-4">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg group">
                      {/* Background Image with Dim Effect */}
                      <Image
                        src={product.image}
                        fill
                        alt={product.title}
                        className="object-cover w-full h-full group-hover:brightness-90 transition-all"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all rounded-xl" />

                      {/* Text Content */}
                      <div className="absolute inset-0 flex flex-col justify-center items-center px-6">
                        <h3 className="text-2xl text-white font-bold">
                          {product.title}
                        </h3>
                        <p className="text-lg text-white font-semibold mt-2 bg-transparent px-3 py-1 rounded-md">
                          {product.price} RON
                        </p>
                        <Button variant="outline" className="mt-4 px-6">
                          Cumpara
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Positioned Navigation Buttons */}
            <div className="absolute bottom-[-2.5rem] left-1/2 transform -translate-x-1/2 flex gap-4">
              <CarouselPrevious className="bg-primary text-white hover:bg-secondary w-12 h-12 rounded-full shadow-md" />
              <CarouselNext className="bg-primary text-white hover:bg-secondary w-12 h-12 rounded-full shadow-md" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Despre noi */}
      <div className="flex flex-col justify-center items-center text-center my-2 md:my-4 px-6">
        <p className="font-bold text-xl md:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary py-4">
          Despre Maison Blanche
        </p>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magnam
          consequatur dolorem assumenda quibusdam, odit fuga dolore eaque non
          accusamus eligendi atque distinctio commodi praesentium ipsum sint eos
          veritatis deleniti? Reiciendis eaque inventore facere, laudantium
          maxime quidem minima a ullam consequatur esse ea autem, rerum nam
          illum. Quis voluptas recusandae aperiam esse sit, odit explicabo quos
          ut id! Sunt, tempora? Voluptates perspiciatis, fugit esse rem sint a
          facilis id ratione iure asperiores repudiandae voluptatum consectetur
          in aliquid? Modi vitae officia velit autem unde, neque, sapiente
          corrupti laboriosam totam, minus quam? Ratione excepturi asperiores
          iusto ipsum similique pariatur cum, repellat tempore nobis numquam a
          sequi delectus itaque dicta iste. Aliquid sunt repudiandae minima
          fugit quidem, atque mollitia? Esse labore veritatis eos? At assumenda,
          corporis iste numquam voluptates recusandae architecto eaque.
          Praesentium mollitia, rerum dolor, a corrupti corporis nihil earum,
          delectus quia accusantium dolores dolorem voluptas dolore. Nemo fugiat
          dolore tempore sed! Sit, ipsum suscipit quidem illo dignissimos
          aliquam modi quaerat enim ex facere, deserunt exercitationem? Aperiam
          assumenda error expedita rerum ad adipisci iusto nihil voluptatibus,
          eaque fugiat voluptatum et vitae fuga. Iusto sed, amet delectus ullam
          corporis quod obcaecati at sint beatae nobis earum exercitationem
          omnis repellendus tempora doloremque quae quidem magnam. Placeat
          ratione, enim eligendi vitae accusantium quis quidem suscipit!
        </p>
        <Link href="/despre-noi">
          <Button variant="default" className="mt-4">
            Află mai multe
          </Button>
        </Link>

        {/* Google Maps Embed */}
        <div className="w-full max-w-8xl mt-6 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2823.750149713866!2d26.004949846991106!3d44.94874687974245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b24bd56f581da7%3A0xbe8515d2843eb920!2zQmxvYyA5QywgU3RyYWRhIELEg25lyJl0aSAxLCBQbG9pZciZdGkgMTAwMzkw!5e0!3m2!1sen!2sro!4v1739183234691!5m2!1sen!2sro"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Contact Information */}
        <div className="flex flex-row items-center gap-2 mt-4">
          <Link
            href="tel:0758013529"
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            <IconPhone size={24} />
            <p className="text-lg font-semibold">0758 013 529</p>
          </Link>
        </div>
      </div>

      {/* Follow us */}

      <div className="flex flex-col justify-center items-center text-center my-2 md:my-4 px-6">
        <p className="font-bold text-xl md:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary py-4">
          Urmărește-ne și pe
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-2">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandFacebook className="w-8 h-8 text-primary hover:text-secondary transition-colors" />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandInstagram className="w-8 h-8 text-primary hover:text-secondary transition-colors" />
          </Link>
          <Link
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandTiktok className="w-8 h-8 text-primary hover:text-secondary transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
