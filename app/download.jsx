import React from "react";
import { motion } from "framer-motion";


function DownloadButton() {
  return (
    <div>
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ amount: 0.3 }}
        className="mt-7 px-4 py-2 text-white bg-red-800 rounded-lg"
        onClick={() => {
          const userAgent =
            navigator.userAgent || navigator.vendor || window.opera;

          if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            // iOS device
            window.location.href =
              "https://apps.apple.com/app/campus-mart/id6746312127";
          } else if (/android/i.test(userAgent)) {
            // Android device
            window.location.href =
              "https://play.google.com/store/apps/details?id=com.artist1711.campusapp";
          } else {
            // Fallback: send to website or show a message
            window.location.href = "https://utmmart.netlify.app/";
          }
        }}
      >
        Download
      </motion.button>
    </div>
  );
}

export default DownloadButton;
