import "./Training.scss";
import plus from "../../assets/icons/plus.svg";
import training1 from "../../assets/images/training-1.svg";

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
					Polecamy skorzystanie z umówienia wizyt prowadzonych przez
					doświadczone specjalistki, Panią Jolante Kucner i Marzannę Miller, w
					domu pacjenta aby zapewnić komfort i prywatność.
				</p>
			</div>
			<div className="training-container">
				<div className="training-text-box">
					<div className="training-box">
						<p className="training-small-heading">
							Wizyty z samocewnikowania i obsługi sprzętu stomijnego
						</p>
						<p className="training-text">
							Podczas sesji uczestnicy zdobywają praktyczne umiejętności,
							obejmujące właściwe techniki samocewnikowania, obsługę sprzętu
							stomijnego oraz usuwania szwów z rany. Dodatkowo przedstawiona
							zostanie wiedza na temat zmiany opatrunku, zastrzyków dożylnych i
							domięśniowych oraz zakładania i usuwania cewnika Foleya. Ponadto
							wizyta obejmuje również domowe leczenie zespołu poalkoholowego.
							Pacjenci zyskują pewność siebie w obszarze, który często może być
							wyzwaniem.
						</p>
					</div>

					<p className="training-text training-phone">
						Aby dowiedzieć się więcej zachęcamy do kontaktu z Panią Jolantą
						Kucner pod numerem - <span className="phone-span">792 663 601</span>{" "}
						oraz z Panią Marzanną Miller pod numerem -{" "}
						<span className="phone-span">690 568 577</span>
					</p>
				</div>

				<img src={training1} alt="" className="training-img" loading="lazy" />
			</div>
		</div>
	);
};

export default Training;
