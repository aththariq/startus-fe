import { Typography, Card } from "@material-tailwind/react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef, useState, useEffect } from "react";

interface StatsCardPropsType {
  count: string;
  title: string;
  description: string;
  index: number; // Menambahkan properti index untuk delay unik
  parentInView?: boolean; // Menambahkan properti parentInView
}

function MainStatsCard() {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, {
    once: true,
    amount: 0.3, // Trigger paling awal
  });

  return (
    <motion.div
      ref={cardRef}
      animate={isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
    >
      <Card
        className="bg-gray-100/50 py-24 text-center"
        shadow={false}
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Typography
          className="!text-primary !leading-snug text-6xl font-extrabold"
          variant="h1"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <CountUp duration={2.5} end={393} />
        </Typography>
        <Typography
          className="mt-2 font-bold"
          color="blue-gray"
          variant="h5"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Total Students
        </Typography>
        <Typography
          className="mt-10 font-bold"
          color="blue-gray"
          variant="h4"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          SMAN 20 Bandung
        </Typography>
        <Typography
          className="mt-1 text-base mx-auto !text-gray-500 lg:w-8/12"
          variant="lead"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Actively participating in shaping their future careers through Start
          Us
        </Typography>
      </Card>
    </motion.div>
  );
}

function RightColumnStats() {
  const columnRef = useRef(null);
  const isColumnInView = useInView(columnRef, {
    once: true,
    amount: 0.4,
  });

  return (
    <div ref={columnRef}>
      <div className="grid lg:grid-cols-2 gap-10 gap-x-20">
        {stats.map((props, key) => (
          <StatsCard
            key={key}
            {...props}
            index={key}
            parentInView={isColumnInView}
          />
        ))}
      </div>
    </div>
  );
}

function StatsCard({
  count,
  title,
  description,
  index,
  parentInView,
}: StatsCardPropsType & { parentInView: boolean }) {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, {
    once: true,
  });

  const shouldAnimate = parentInView && isCardInView;

  const numericCount = parseFloat(count.replace(/[^0-9.]/g, ""));
  const suffix = count.replace(numericCount.toString(), "");

  return (
    <motion.div
      ref={cardRef}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: 0.8 + index * 0.4, // Base delay 0.8s + 0.4s per card
      }}
    >
      <Card
        color="transparent"
        shadow={false}
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Typography
          className="text-4xl font-bold text-primary"
          variant="h1"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <CountUp duration={2.5} end={numericCount} suffix={suffix} />
        </Typography>
        <hr className="mt-2 mb-4 max-w-xs" />
        <Typography
          className="mt-1 font-bold"
          color="blue-gray"
          variant="h5"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {title}
        </Typography>
        <Typography
          className="text-base max-w-xs font-normal leading-7 !text-gray-500"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {description}
        </Typography>
      </Card>
    </motion.div>
  );
}

const stats = [
  {
    count: "72%",
    title: "Students Uncertain About Future",
    description:
      "Percentage of grade XII students struggling to choose a major or career path.",
  },
  {
    count: "200+",
    title: "Platform Users",
    description: "Number of students expected to use the Start Us platform.",
  },
  {
    count: "10+",
    title: "Available Mentors",
    description: "Number of experienced mentors supporting the program.",
  },
  {
    count: "75%",
    title: "Students with Professional Profiles",
    description:
      "Percentage of students who now have CVs, LinkedIn profiles, or portfolios.",
  },
];

const Stats = () => {
  const text =
    "Start Us isn't just about solving problems—it's about building a foundation for lifelong success.";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartTyping(true);
    }
  }, [isInView]);

  return (
    <section className="py-10 px-8 container mx-auto">
      {/* Kalimat Penghubung */}
      <div ref={ref} className="mb-10">
        <motion.p
          className="text-2xl font-normal text-center mx-auto text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
          whileInView={{ opacity: 1 }}
        >
          {startTyping &&
            text.split("").map((char, index) => (
              <motion.span
                key={index}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.01,
                  delay: index * 0.02,
                }}
              >
                {char}
              </motion.span>
            ))}
        </motion.p>
      </div>

      {/* Layout Utama */}
      <div className="grid gap-10 lg:grid-cols-1 lg:gap-24 xl:grid-cols-2 items-center">
        {/* Kolom Kiri: Card dengan Statistik Utama */}
        <MainStatsCard />

        {/* Kolom Kanan: Grid dengan Statistik Tambahan */}
        <RightColumnStats />
      </div>
    </section>
  );
};

export default Stats;
