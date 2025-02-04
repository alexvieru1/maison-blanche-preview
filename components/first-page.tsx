"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
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
import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok } from "@tabler/icons-react";

const FirstPage = () => {
  const images = [
    "https://scontent.fcnd1-1.fna.fbcdn.net/v/t39.30808-6/473135673_122211263384225139_6624981043578159145_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=UvEcOehlBdwQ7kNvgFF5fhT&_nc_oc=AdgUYnr4rEnbKTsJm2XuarbP7iCif2sz1WoMtw21UjBWLfHBsQOLjURK7DRA3Zdf-jg&_nc_zt=23&_nc_ht=scontent.fcnd1-1.fna&_nc_gid=AELptc11cLc5bfv5CWV1ifn&oh=00_AYBHBmhAuptKSFWgA5fS5sPDzwKI1mEZV0Ln1Nxb6qOZYg&oe=67A7BE70",
    "https://scontent.fcnd1-1.fna.fbcdn.net/v/t39.30808-6/468718115_122202144320225139_4681632661599906630_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=fBzcDBQOLNsQ7kNvgFWkFf2&_nc_oc=AdgM_XDaB1gKTZemzwCeiEBXDwe1EpFZ2FPhziqpxHYwtAFdyPHNYkdMy9accatT3bg&_nc_zt=23&_nc_ht=scontent.fcnd1-1.fna&_nc_gid=A_MMtuLsGDBWwjxrHd80Lp6&oh=00_AYDp-8DDDem99GpI-Sy5vcI1hF5RXJYELXmqPsvlRwnRSQ&oe=67A7C2E9",
    "https://scontent.fcnd1-1.fna.fbcdn.net/v/t39.30808-6/474626650_122214372068225139_6863323798520589109_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=37sM8ltb06wQ7kNvgG7uV_Y&_nc_oc=AdjRkYviv9SKJU6Hfh735iL6Elas8E32h4xrjYKGPlajLu2GHvZEfGTboijJmv3f5FE&_nc_zt=23&_nc_ht=scontent.fcnd1-1.fna&_nc_gid=AJvvp6CpNZJULpY0j4_W_qa&oh=00_AYBsVKiKCRzgnKJeYLJOF4RShcHs3RJIEsRY1q3nFf44_A&oe=67A7BE65",
  ];

  const products = [
    {
      title: "Decoratiune ren",
      price: 150,
      image:
        "https://scontent.fcnd1-1.fna.fbcdn.net/v/t39.30808-6/470197709_122205364208225139_7685220243907591974_n.jpg?stp=cp6_dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mbQ_I5iWUWkQ7kNvgEusH8l&_nc_oc=Adirlv-2EKEOE9tC3i4ayYFnB7n9mPPe8mH8ep3fim9aatfymAKS4dwi6UnzBewoA6w&_nc_zt=23&_nc_ht=scontent.fcnd1-1.fna&_nc_gid=AXRC62Jqzn7CsKJaT_iN4La&oh=00_AYCPzoqQiBOXXrhJpBfYOet_4-lc86Fw9qR8WM0qtpfAyQ&oe=67A7DA8F",
    },
    {
      title: "Aranjament argintiu",
      price: 190,
      image:
        "https://scontent.fcnd1-1.fna.fbcdn.net/v/t39.30808-6/470199804_122205364244225139_4679536755451628855_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Rijg9A2Qq9oQ7kNvgFkbFdP&_nc_oc=AdgwhGOMfQWWwLvd2DV38LmUrX-EGS7ghWVXIN30RR30p0SXtblMIuiDGhZ0TuJZEsY&_nc_zt=23&_nc_ht=scontent.fcnd1-1.fna&_nc_gid=Aq6LWemNtCYZbe5qOgASSDM&oh=00_AYByZi0Mrunrq2_XTLCv6XAff59IUzuqXqbIZbSwdfmLtQ&oe=67A7D01B",
    },
    {
      title: "Aranjament ursi",
      price: 150,
      image:
        "https://scontent.fcnd1-1.fna.fbcdn.net/v/t39.30808-6/470524443_122205364400225139_5128376775433304245_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JXP6cVseF10Q7kNvgG5FF-0&_nc_oc=Adg_c834EIkfN6PFU-iAOd3ikT45eF1_PdvCLomLUMbun4r6qbsKqsKywUi4H-bAjI8&_nc_zt=23&_nc_ht=scontent.fcnd1-1.fna&_nc_gid=ANh3sOLsod-B1xrk7dNHLKB&oh=00_AYAPussAPCZjtjtwryXsAS-62legl2msJbdPvjj-ehtq2Q&oe=67A7D0D6",
    },
    {
      title: "Aranjament ren mov",
      price: 150,
      image:
        "https://scontent.fcnd1-1.fna.fbcdn.net/v/t39.30808-6/470181273_122205364316225139_8395375513631405592_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RcuhfTKBZfkQ7kNvgHtwNXv&_nc_oc=Adiged1gdtMR8B9XfNt_cRpcjCsQxgkUHEk_IYgZKuMBmhEWRo8rCnGmQldmSBT0WEc&_nc_zt=23&_nc_ht=scontent.fcnd1-1.fna&_nc_gid=AKzgWF7W4mtj9RdeS5yzKjh&oh=00_AYAbjIT-1NF-FYV9imv8n7-uo7HHZd4q4cNL0Xw34ao0lA&oe=67A7CA08",
    },
    {
      title: "Oameni de zapada",
      price: 90,
      image:
        "https://scontent.fcnd1-1.fna.fbcdn.net/v/t39.30808-6/470172924_122205364220225139_1040310451867717925_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mqiUn7j5ZYcQ7kNvgGUh6p4&_nc_oc=Adg1BEWIIihCfTprHcB7JO0fYwU33pf2qatadPdu6EkQ9kEJgkfN_oJsM6CQgX0-qhg&_nc_zt=23&_nc_ht=scontent.fcnd1-1.fna&_nc_gid=AfJzdj93hFtDlSD5camqqlp&oh=00_AYBVlPhCr1ZnBtdVUjuRcG6b-UjGkUQBiuhBpdoZppedJw&oe=67A7AF0C",
    },
    {
      title: "Lumanare glob",
      price: 90,
      image:
        "https://scontent.fcnd1-1.fna.fbcdn.net/v/t39.30808-6/470204904_122205364304225139_5988628803932497746_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=64DCK9qS48kQ7kNvgGyB760&_nc_oc=AdhybBIFjKYsMJKFFk2nHjt_jPgD8i2RB0_tp06BvjkLt_4F-Gg1uNzqKDD6_L0oyPQ&_nc_zt=23&_nc_ht=scontent.fcnd1-1.fna&_nc_gid=Aeh0kmP5VMKPJVY4F1WMY8d&oh=00_AYDD2W2NOFd8IXE3b2L5mRw3oAc-Kg8rlNux2g8feD21zA&oe=67A7A794",
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

      <div className="flex flex-col justify-center items-center my-2 md:my-4">
        <p className="font-bold text-xl md:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary py-4">
          Produse populare
        </p>
        <Carousel opts={{ align: "start" }} className="w-full max-w-7xl p-4">
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem
                key={product.title}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-4">
                  <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg group">
                    {/* Background Image with Dim Effect */}
                    <Image
                      src={product.image}
                      fill
                      alt={product.title}
                      className="object-cover w-full h-full group-hover:brightness-90 transition-all"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />

                    {/* Text Content */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center px-6">
                      <h3 className="text-2xl text-input font-bold">
                        {product.title}
                      </h3>
                      <p className="text-lg text-input font-semibold mt-2 bg-transparent px-3 py-1 rounded-md">
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
          <CarouselPrevious className="bg-primary/80 text-white hover:bg-primary" />
          <CarouselNext className="bg-primary/80 text-white hover:bg-primary" />
        </Carousel>
      </div>

      {/* Despre noi */}

      <div className="flex flex-col justify-center items-center text-center my-2 md:my-4 px-6">
        <p className="font-bold text-xl md:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary py-4">
          Despre Maison Blanche
        </p>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
          inventore consectetur debitis dicta at qui odio rerum. Fuga recusandae
          culpa minima aliquid accusamus? Eligendi sint officia odit fugiat
          officiis sit. Quos, quisquam. Suscipit fugit ducimus facere enim
          molestias, optio laudantium expedita atque iste unde eum illum magni
          quam, praesentium distinctio deleniti sint sed quasi, numquam
          voluptates culpa ex! Ipsa, quidem! Nostrum, incidunt? Corporis ipsam
          illum natus id quo fuga animi, voluptates a maxime et minima dicta?
          Reiciendis veritatis eveniet doloribus exercitationem. Quidem, a!
          Tempore eveniet harum, illum facilis ab assumenda. Et explicabo, natus
          harum laboriosam totam maiores distinctio veniam ullam consectetur
          placeat dolor, illum minima vitae nam quod est officia repellat porro
          blanditiis nemo perspiciatis ex in expedita voluptatum!
          Exercitationem! Iure, veniam exercitationem! Quis impedit inventore
          veritatis non sequi. Dolore atque sequi placeat, molestias accusantium
          in tempora, similique quia omnis perferendis aspernatur voluptatibus
          non exercitationem earum, iusto quas totam molestiae! Dolor asperiores
          nulla maiores incidunt deleniti repellendus architecto perspiciatis
          quod, dolorum quaerat fugiat qui dolores illum? Reiciendis cumque a,
          eum veniam nostrum minus culpa, obcaecati iure eligendi, eius amet
          tempore. Laboriosam deleniti dignissimos facere, quis provident ad
          sapiente et iusto ex ratione molestias, soluta in, expedita
          praesentium sint a voluptates illum numquam inventore labore.
          Consequatur eaque obcaecati quo iusto excepturi.
        </p>
        <Link href="/despre-noi">
          <Button variant="default" className="mt-4">
            Află mai multe
          </Button>
        </Link>
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
