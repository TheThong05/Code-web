document.getElementById("generateBtn").addEventListener("click", () => {
	const gender = document.getElementById("gender").value;
	const style = document.getElementById("style").value;
	const weather = document.getElementById("weather").value;

	const suggestion = getOutfitSuggestion(gender, style, weather);

	document.getElementById("result").innerHTML = `
		<p><strong>Gợi ý phối đồ:</strong></p>
		<p>${suggestion}</p>
	`;

	// Lưu vào localStorage
	localStorage.setItem("lastSuggestion", suggestion);
});

// Khi mở lại trang, hiển thị gợi ý cũ nếu có
window.onload = () => {
	const saved = localStorage.getItem("lastSuggestion");
	if (saved) {
		document.getElementById("result").innerHTML = `
			<p><strong>Gợi ý lần trước:</strong></p>
			<p>${saved}</p>
		`;
	}
};

// "AI giả lập" — chọn gợi ý dựa theo rule đơn giản
function getOutfitSuggestion(gender, style, weather) {
	if (gender === "male" && style === "street" && weather === "hot")
		return "Áo thun oversize + quần short jean + sneaker trắng.";
	if (gender === "male" && style === "office" && weather === "cool")
		return "Áo sơ mi trắng + quần tây xám + giày da nâu.";
	if (gender === "female" && style === "minimal" && weather === "hot")
		return "Váy linen trắng + sandal dây mảnh + túi tote vải.";
	if (gender === "female" && style === "sporty" && weather === "cold")
		return "Áo khoác bomber + legging đen + giày thể thao trắng.";
	if (weather === "cold")
		return "Khoác thêm áo len hoặc cardigan để giữ ấm.";
	return "Áo phông basic + quần jean xanh – phong cách đơn giản và năng động!";
}
