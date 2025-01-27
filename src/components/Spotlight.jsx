function TopRightSpotlight() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        top-0
        right-0
        w-[60rem]
        h-[60rem]
        z-[9999]            /* Very high z-index so it's on top */
        bg-gradient-radial
        from-white/20
        to-transparent
        opacity-70
      "
      style={{
        // This ensures the radial gradient is anchored at top-right
        backgroundPosition: "top right",
      }}
    />
  );
}

export default TopRightSpotlight;
