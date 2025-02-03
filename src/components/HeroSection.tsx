import { Button } from "@heroui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-4rem)] w-full bg-[url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative h-full flex items-center justify-center">
        <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-extrabold text-white sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let us help you{" "}
              <strong className="block font-extrabold text-primary">
                Discover Your Potential.
              </strong>
            </motion.h1>

            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 max-w-lg text-white sm:text-xl/relaxed"
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
                className="rounded px-12 py-3 text-sm font-medium shadow hover:opacity-90 focus:outline-none focus:ring active:opacity-80"
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
};

export default HeroSection;
