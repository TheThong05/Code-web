(function () {
  const audio = document.getElementById("bg-audio");
  if (!audio) return;

  // Nỗ lực phát khi DOM sẵn sàng (có thể bị chặn trên một số trình duyệt)
  const tryPlay = () => {
    audio.play().catch(() => {
      // Nếu bị chặn, đợi người dùng tương tác rồi phát
      const onUserGesture = () => {
        audio.play().catch(() => {/* người dùng có thể tự bấm nút Play */});
        // Gỡ listener sau lần đầu
        window.removeEventListener("click", onUserGesture);
        window.removeEventListener("keydown", onUserGesture);
        window.removeEventListener("touchstart", onUserGesture);
      };
      window.addEventListener("click", onUserGesture, { once: true });
      window.addEventListener("keydown", onUserGesture, { once: true });
      window.addEventListener("touchstart", onUserGesture, { once: true });
    });
  };

  if (document.readyState === "complete" || document.readyState === "interactive") {
    tryPlay();
  } else {
    document.addEventListener("DOMContentLoaded", tryPlay);
  }
})();
