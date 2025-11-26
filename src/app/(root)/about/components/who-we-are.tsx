"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface WhoWeAreProps {
  title: string;
  description: string;
  mediaUrl?: string; // can be image or video
  isVideo?: boolean; // set true if mediaUrl is a video
}

const WhoWeAre: FC<WhoWeAreProps> = ({
  title,
  description,
  mediaUrl,
  isVideo = false,
}) => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="sectionHeading font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
        </motion.div>

        {/* Right Media */}
        {mediaUrl && (
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {isVideo ? (
              <video
                src={mediaUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            ) : (
              <img
                src={mediaUrl}
                alt={title}
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WhoWeAre;
