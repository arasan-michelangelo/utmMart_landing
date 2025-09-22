import React from "react";

function DownloadButton() {
  const handleClick = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href =
        "https://apps.apple.com/app/campus-mart/id6746312127";
    } else if (/android/i.test(userAgent)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.artist1711.campusapp";
    } else {
      window.location.href = "https://cmpsapp.com/";
    }
  };

  return (
    <button
  onClick={handleClick}
  className="px-6 py-3 rounded-full font-bold text-white text-lg
             shadow-lg hover:opacity-90 active:scale-95
             transition-all duration-200 bg-campus-gradient w-[200px]"
>
  🚀 Try Campus
</button>

  );
}

export default DownloadButton;
