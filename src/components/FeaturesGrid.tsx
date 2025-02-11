import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function App() {
  const ref = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3, // Trigger when 20% of the element is in view
    once: true,  // Only trigger once
  });
  const isTitleInView = useInView(titleRef, { amount: 0.5, once: true });

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Slower stagger for sequential appearance
        delayChildren: 0.2, // Initial delay before starting animations
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Start from a bit below
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15, // Higher damping for smoother movement
        stiffness: 70, // Lower stiffness for gentler animation
        mass: 1.2, // Higher mass for slower movement
        duration: 0.8, // Longer duration
      },
    },
  };

  return (
    <div className="flex justify-center items-center w-full py-10">
      {/* Main Title */}
      <div className="w-full max-w-[1300px] px-8">
        <motion.h1
          ref={titleRef}
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
          className="text-5xl font-bold text-left text-gray-800 mb-8"
        >
          StartUs: Empowering Your Future
        </motion.h1>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          animate={isInView ? "visible" : "hidden"}
          className="gap-4 grid grid-cols-12 grid-rows-2"
          initial="hidden"
          variants={containerVariants}
        >
          {/* Card 1: Discover Yourself */}
          <motion.div
            className="col-span-12 sm:col-span-4"
            variants={cardVariants}
          >
            <Card className="h-[300px] relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  Self-Discovery
                </p>
                <h4 className="text-white font-medium text-lg">
                  Unlock Your Potential
                </h4>
              </CardHeader>
              <Image
                isZoomed
                removeWrapper
                alt="Discover Yourself"
                className="z-0 w-full h-full object-cover brightness-50 hover:brightness-90 transition-all duration-300 ease-in-out"
                src="https://images.pexels.com/photos/7005759/pexels-photo-7005759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </Card>
          </motion.div>

          {/* Card 2: Find Your Mentor */}
          <motion.div
            className="col-span-12 sm:col-span-4"
            variants={cardVariants}
          >
            <Card className="h-[300px] relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  Mentorship
                </p>
                <h4 className="text-white font-medium text-lg">
                  Connect with Experts
                </h4>
              </CardHeader>
              <Image
                isZoomed
                removeWrapper
                alt="Find Your Mentor"
                className="z-0 w-full h-full object-cover brightness-50 hover:brightness-90 transition-all duration-300 ease-in-out"
                src="https://images.pexels.com/photos/5212352/pexels-photo-5212352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </Card>
          </motion.div>

          {/* Card 3: Skill-Building Workshops */}
          <motion.div
            className="col-span-12 sm:col-span-4"
            variants={cardVariants}
          >
            <Card className="h-[300px] relative overflow-hidden">
              <CardHeader className="absolute z-10 top-4 left-4 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  Skill Development
                </p>
                <h4 className="text-white font-medium text-lg">
                  Build Essential Skills
                </h4>
              </CardHeader>
              <Image
                isZoomed
                removeWrapper
                alt="Skill-Building Workshops"
                className="z-0 w-full h-full object-cover brightness-50 hover:brightness-90 transition-all duration-300 ease-in-out"
                src="https://images.pexels.com/photos/7648306/pexels-photo-7648306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </Card>
          </motion.div>

          {/* Card 4: Certification & Pathways */}
          <motion.div
            className="col-span-12 sm:col-span-5"
            variants={cardVariants}
          >
            <Card
              isFooterBlurred
              className="w-full h-[300px] relative overflow-hidden"
            >
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  Certification
                </p>
                <h4 className="text-white font-medium text-xl">
                  Earn Your Certificate
                </h4>
              </CardHeader>
              <Image
                isZoomed
                removeWrapper
                alt="Certification & Pathways"
                className="z-0 w-full h-full object-cover brightness-50 hover:brightness-90 transition-all duration-300 ease-in-out"
                src="https://images.pexels.com/photos/9829307/pexels-photo-9829307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </Card>
          </motion.div>

          {/* Card 5: Sustainability Plan */}
          <motion.div
            className="col-span-12 sm:col-span-7"
            variants={cardVariants}
          >
            <Card
              isFooterBlurred
              className="w-full h-[300px] relative overflow-hidden"
            >
              {/* Card Header */}
              <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  Sustainability
                </p>
                <h4 className="text-white/90 font-medium text-xl">
                  Long-Term Impact
                </h4>
              </CardHeader>

              {/* SDG Logos (Ujung Kanan Atas) */}
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                <Image
                  isBlurred
                  alt="SDG 4"
                  className="w-16 h-16 object-cover"
                  radius="sm"
                  src="/sdg4.jpg"
                />
                <Image
                  isBlurred
                  alt="SDG 17"
                  className="w-16 h-16 object-cover"
                  radius="sm"
                  src="/sdg17.jpg"
                />
              </div>

              {/* Background Image */}
              <Image
                isZoomed
                removeWrapper
                alt="Sustainability Plan"
                className="z-0 w-full h-full object-cover brightness-50 hover:brightness-90 transition-all duration-300 ease-in-out"
                src="https://images.pexels.com/photos/6827128/pexels-photo-6827128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />

              {/* Card Footer */}
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 p-4">
                <div className="flex flex-grow gap-2 items-center">
                  <Image
                    alt="StartUs Logo"
                    className="rounded-full w-10 h-11 bg-black"
                    src="https://via.placeholder.com/50x50?text=Logo"
                  />
                  <div className="flex flex-col">
                    <p className="text-tiny text-white">StartUs Initiative</p>
                    <p className="text-tiny text-white/60">
                      Empowering students for the future.
                    </p>
                  </div>
                </div>
                <Button
                  className="bg-primary text-white hover:scale-110"
                  radius="full"
                  size="sm"
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
