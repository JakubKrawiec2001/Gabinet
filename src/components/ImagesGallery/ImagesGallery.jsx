import { useState } from "react";
import { images } from "../../data/imagesDB";
import "./ImagesGallery.scss";
import { IoIosCloseCircle } from "react-icons/io";

const ImagesGallery = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [open, setOpen] = useState(false);

	const handleSelectImage = (image) => {
		if (image) {
			setSelectedImage(image);
			setOpen(true);
		}
	};
	const handleClosePopup = () => {
		setOpen(false);
		setSelectedImage(null);
	};

	return (
		<>
			<div className="images-gallery-container">
				{images.map((image) => {
					return (
						<div className="images-gallery-box" key={image.id}>
							<img
								src={image.src}
								alt="The appearance of a urology office"
								loading="lazy"
								className="images-gallery-item"
								onClick={() => {
									handleSelectImage(image.src);
								}}
							/>
						</div>
					);
				})}
			</div>
			<div
				className={
					open ? "image-popup-container open-popup" : "image-popup-container"
				}>
				<IoIosCloseCircle className="popup-icon" onClick={handleClosePopup} />
				<img
					src={selectedImage}
					alt="The appearance of a urology office"
					className={`popup-image`}
					onClick={handleClosePopup}
					loading="lazy"
				/>
			</div>
		</>
	);
};

export default ImagesGallery;
