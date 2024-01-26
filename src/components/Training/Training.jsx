import "./Training.scss";
import plus from "../../assets/icons/plus.svg";
import training1 from "../../assets/images/training-1.svg";
import training2 from "../../assets/images/training-2.svg";

const Training = () => {
	return (
		<div className="training wrapper">
			<div className="section-heading-container section-heading-training">
				<div className="section-heading-small-text-box">
					<p className="section-heading-small-text">Wiedza</p>
					<img src={plus} alt="" className="section-heading-icon" />
				</div>
				<h2 className="section-heading">Dla pacjenta</h2>
				<p className="training-heading-text">
					Z dumą prezentujemy naszą inicjatywę w postaci wizyt prowadzonych
					przez doświadczone specjalistki, Panią Jolante Kucner i Marzannę
					Miller, w domu pacjenta aby zapewnić komfort i prywatność.
				</p>
			</div>
			<div className="training-container">
				<div className="training-l">
					<p className="training-heading">Spotkania z Jolantą Kucner</p>
					<div className="training-box">
						<p className="training-small-heading">
							Wizyty z samocewnikowania i obsługi sprzętu stomijnego
						</p>
						<p className="training-text">
							Podczas sesji uczestnicy zdobywają praktyczne umiejętności,
							obejmujące właściwe techniki samocewnikowania oraz obsługę sprzętu
							stomijnego. Dzięki naszym doświadczonym instruktorom, pacjenci
							zyskują pewność siebie w obszarze, który często może być
							wyzwaniem.
						</p>
					</div>
					<div className="training-box">
						<p className="training-small-heading">
							Wizyty z zakładania i wymiany cewników Foleya
						</p>
						<p className="training-text">
							Zakładanie i wymiana cewników Foleya wymagają specjalistycznej
							wiedzy i umiejętności. Nasze spotkania koncentrują się na
							bezpieczeństwie pacjenta, zapewniając kompleksowe zrozumienie
							procedur i praktyczne umiejętności, które pozwalają efektywnie
							obsługiwać cewnik w warunkach domowych.
						</p>
					</div>
					<p className="training-text training-phone">
						Aby dowiedzieć się więcej na temat współpracy z Panią Jolantą Kucner
						zadzwoń - <span className="phone-span">792 663 601</span>
					</p>
				</div>

				<img src={training1} alt="" className="training-img" />

				<div className="bg-blur bg-blur-left-training"></div>
			</div>
			<div className="training-container">
				<div className="training-l">
					<p className="training-heading">Spotkania z Marzanną Miller</p>

					<div className="training-box">
						<p className="training-small-heading">
							Wizyty na temat samodzielnego zdejmowania szwów
						</p>
						<p className="training-text">
							Kompleksowe spotkania dotyczące bezpiecznego usuwania szwów.
							Podczas sesji uczestnicy zdobywają krok po kroku praktyczne
							umiejętności, aby samodzielnie i bezpiecznie radzić sobie z
							procesem usuwania szwów w warunkach domowych.
						</p>
					</div>
					<div className="training-box">
						<p className="training-small-heading">
							Wizyty na temat leczenie infekcji dożylnych i domięśniowych
						</p>
						<p className="training-text">
							Sesję obejmują profesjonalną instrukcję dotyczącą leczenia
							infekcji dożylnych i domięśniowych. Dzielimy się wiedzą na temat
							odpowiednich procedur, środków ostrożności i działań, które mogą
							być podjęte w przypadku infekcji, aby zapewnić pełne zrozumienie i
							umiejętności pacjenta.
						</p>
					</div>
					<p className="training-text">
						Aby dowiedzieć się więcej na temat współpracy z Panią Marzanną
						Miller zadzwoń - <span className="phone-span">690 568 577</span>
					</p>
				</div>

				<img src={training2} alt="" className="training-img" />

				<div className="bg-blur bg-blur-right-training"></div>
			</div>
		</div>
	);
};

export default Training;
