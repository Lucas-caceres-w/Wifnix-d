import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";

function Acount() {
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `none`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    color: "#020a4f",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  return (
    <section className="w-7/12 pt-28 flex flex-col color-blue">
      <p className="font-bold text-3xl text-left">Creación de una cuenta</p>
      <div className="pt-10">
        <p className="text-xl font-bold py-3">Crear una cuenta</p>
        <ul className="text-sm md:text-lg w-max font-medium flex flex-col pl-0">
          <Accordion>
            <AccordionSummary>
              <li className="color-blue">¿Como creo una cuenta de Wifnix?</li>
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <li className="color-blue">
                Hacer que una contraseña de Wifnix sea segura
              </li>
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <li className="color-blue">
                No puedo crear una cuenta de Wifnix
              </li>
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <li className="color-blue">
                ¿Por que se ha rechazado mi sombre durante el registro?
              </li>
            </AccordionSummary>
          </Accordion>
        </ul>
      </div>
      <div className="pt-5">
        <p className="text-xl font-bold py-3">Confirmar la cuenta</p>
        <ul className="text-sm md:text-lg font-medium flex flex-col pl-0">
          <Accordion>
            <AccordionSummary>
              <li className="color-blue">¿Como termino de crear mi cuenta de Wifnix?</li>
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <li className="color-blue">
                No he recibido el codigo de Wifnix para confirmar mi cuenta
              </li>
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <li className="color-blue">No encuentro el correo de confirmacion de mi registro</li>
            </AccordionSummary>
          </Accordion>
        </ul>
      </div>
    </section>
  );
}

export default Acount;
