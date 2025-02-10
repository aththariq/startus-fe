import { motion, useInView } from "framer-motion";
import { Image } from "@heroui/image";
import { useRef } from "react";

const AboutUs = () => {
  const mainRef = useRef(null);
  const listRef = useRef(null);

  const isMainInView = useInView(mainRef, { once: true, amount: 0.2 });
  const isListInView = useInView(listRef, {
    once: true,
    amount: 0.3,
  });

  const listVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.1, // Increased initial delay to let main content appear first
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 0.3,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-12 mx-auto pt-10">
      {/* Grid */}
      <div
        ref={mainRef}
        className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32 ml-8"
      >
        {/* Image Section */}
        <motion.div
          animate={isMainInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            isBlurred
            isZoomed
            alt="About Us"
            className="rounded-xl w-[600px] object-cover h-96"
            shadow="lg"
            src="https://images.pexels.com/photos/18772861/pexels-photo-18772861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          animate={isMainInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          className="mt-5 sm:mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="space-y-6 sm:space-y-8">
            {/* Title */}
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-4xl lg:text-5xl text-gray-800 dark:text-gray-200">
                About Start Us
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Start Us is an initiative designed to help high school students
                discover their potential and plan their future. Through
                self-discovery tools, mentorship, and skill-building workshops,
                we aim to bridge the gap between education and career readiness.
              </p>
            </div>

            {/* List */}
            <div ref={listRef}>
              <motion.ul
                animate={isListInView ? "show" : "hidden"}
                className="space-y-2 sm:space-y-4"
                initial="hidden"
                variants={listVariants}
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.li className="flex gap-x-3" variants={itemVariants}>
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                    <svg
                      className="shrink-0 size-3.5"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                      <span className="font-bold">Discover Yourself</span>: Help
                      students uncover their strengths and potential.
                    </span>
                  </div>
                </motion.li>

                <motion.li className="flex gap-x-3" variants={itemVariants}>
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                    <svg
                      className="shrink-0 size-3.5"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                      <span className="font-bold">Find Your Mentor</span>:
                      Connect with experienced mentors for guidance.
                    </span>
                  </div>
                </motion.li>

                <motion.li className="flex gap-x-3" variants={itemVariants}>
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                    <svg
                      className="shrink-0 size-3.5"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                      <span className="font-bold">
                        Skill-Building Workshops
                      </span>
                      : Develop essential skills for the future.
                    </span>
                  </div>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
