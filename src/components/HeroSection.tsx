import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // tambahkan AnimatePresence
import { Button } from "@heroui/button";

function HeroSection() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "Unleash Your Future",
      "Shape Your Path",
      "Find Your Direction",
      "Build Your Vision",
      "Empower Your Journey",
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000); // Ganti teks setiap 2 detik

    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="relative h-[calc(100vh-4rem)] w-full bg-[url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full flex items-center justify-center">
        <div className="w-full sm:max-w-screen-xl px-4 sm:px-6 lg:px-8 md:max-w-screen-4xl">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-7xl text-center"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              animate={{ opacity: 1 }}
              className="text-5xl font-extrabold text-white sm:text-7xl"
              initial={{ opacity: 1 }}
            >
              Let us help you{" "}
              <strong className="block font-extrabold text-primary">
                <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-extrabold text-7xl text-primary"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </strong>
            </motion.h1>
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 max-w-2xl text-white sm:text-2xl/relaxed text-center mx-auto"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              StartUs is here to guide you through self-discovery, mentorship,
              and skill-building to shape your future.
            </motion.p>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                as="a"
                className="rounded px-12 py-3 text-sm font-medium shadow hover:opacity-90 focus:outline-none focus:ring active:opacity-80 animate-pulse-scale"
                color="primary"
                href="#get-started"
                size="lg"
              >
                Get Started
              </Button>
              <Button
                as="a"
                className="rounded px-12 py-3 text-sm font-medium text-primary shadow hover:opacity-90 focus:outline-none focus:ring active:opacity-80"
                color="default"
                href="#learn-more"
                size="lg"
                variant="ghost"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
