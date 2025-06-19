import "./App.css";
import Pagina from "../components/Pagina";
import Header from "../components/Header";
import MySlider from "../components/Slider";
import { useState } from "react";
import  Footer  from "../components/Footer";
import styles from '../public/css/desktop/style';

const arrayRenumeração = [
  1.95, 0.55, 0.6, 0.7, 0.85, 0.85, 1, 1, 1.2, 1.9, 1.95, 3.6, 4.75, 7, 5.35,
  3.95, 3.6, 3.1, 2.85, 2.4, 2.05, 1.95, 1.8, 1.6, 1.7, 1.8, 1.65, 1.25, 1.15,
  1.1, 1.3, 1.2, 1.1, 1.15, 1.15, 1.3, 1.1, 1.1, 0.9, 0.85, 1.1, 1.3, 0.95,
  0.95, 1.7, 0.9, 0.65, 0.85, 0.65, 1.15, 0.65, 0.4, 0.4, 0.4, 0.45, 0.65, 0.35,
  0.35, 0.4, 0.35, 0.3, 0.3, 0.6, 0.35, 0.25, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
  0.3, 0.2, 0.25, 0.25, 0.8, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.15, 0.15,
  0.15, 0.15, 0.15, 0.25, 0.25, 0.15, 0.15, 0.15, 0.15, 0.15, 0.2, 0.25,
];


function calcTotalDespesas(n1: number,n2: number,n3: number,n4: number,n5: number){
  return n1*5+n2*5+n3*5+n4*5+n5*5
}

function calcRenumPercentil(n: number) {
  let total = 0;
  let i = 0;

  while (i <= n) {
    total += arrayRenumeração[i];
    i++;
  }

  if (Number(total.toFixed(2)) === 100.0) return 99.99;
  return total.toFixed(2);
}

function calcInflation(n: number){
  const taxaInflacão=0.045;
  const valorInicial=25000;
  const valorfinal=valorInicial/Math.pow(1 + taxaInflacão, n);
  return valorfinal;
}

function calcRenum(n: number) {
  return 200 + 100 * n;
}

function calcHoras(n: number, t: number) {
  const horas = Number(caclMeses(t, n)) * 22 * 8;
  return horas;
}

function caclMeses(n: number, t: number) {
  const meses = (190000 * (1 - n / 100)) / (t * 25);
  return meses.toFixed(0);
}

function App() {
  const [sliderValue1, setSliderValue1] = useState<number>(1);
  const [sliderValue2, setSliderValue2] = useState<number>(2);
  const [sliderValue3, setSliderValue3] = useState<number>(1);
  const [sliderValue4, setSliderValue4] = useState<number>(2);
  const [sliderValue5, setSliderValue5] = useState<number>(2);
  const [sliderValue6, setSliderValue6] = useState<number>(2);
  const [sliderValue7, setSliderValue7] = useState<number>(2);
  const [sliderValue8, setSliderValue8] = useState<number>(2);
  const [sliderValue9, setSliderValue9] = useState<number>(2);

  return (
    <>
      <Header />
      <Pagina pad="2" id='1' idTo='2'>
        <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center text-center gap-md-5 gap-0">
          <div className="d-lg-none d-flex col-12 d-lg-flex align-items-center justify-content-center">
            <h1
              style={styles.Page1MainTitleMB}
            >
              Onde Foi o Meu Guito
            </h1>
          </div>
          <div className="col-md-5 col-sm-9 col-12 text-end justify-content-end align-content-end align-items-end p-4 p-md-0">
            <img className="img-fluid" src="../imgs/image.png" alt="" />
          </div>
          <div className="d-lg-none d-flex flex-column col-12 d-md-flex align-items-center justify-content-center">
            <h2
              style={styles.Page1SubTitleMB}
            >
              Uma Visão da Realidade
            </h2>
            <h2
              style={styles.Page1SubTitleMB}
            >
              Financeira Portuguesa
            </h2>
          </div>
          <div className="text-start d-none col-5 d-lg-flex flex-column align-items-left justify-content-center">
            <h1
              style={styles.Page1TitleDST}
            >
              Onde foi o meu Guito
            </h1>
            <h2
              style={styles.Page1SubTitleDST}
            >
              Uma visão da realidade Financeira Portuguesa
            </h2>
          </div>
        </div>
      </Pagina>
      <Pagina id='2' idTo='3' cor="brancoSujo" title="Salários" pad="3">
        <div className="d-flex d-lg-none justify-content-center text-center align-itens-center flex-column col-12 gap-2">
          <div className="d-flex flex-column">
            <h1
              style={styles.TitleMB}
            >
              Afinal sou rico?
            </h1>
            <h2
              style={styles.SubTitleMB}
            >
              Comparação Salarial
            </h2>
          </div>
          <div className="d-flex col-7 align-self-center">
            <img className="img-fluid" src="../imgs/carteira.png" />
          </div>
          <div style={styles.caixaPequena} className="d-flex flex-column">
            <h1
              style={styles.BoxTitleBigMB}
            >
              Quanto recebes por mês?
            </h1>
            <h3
              style={styles.BoxSubTitleMB}
            >
              (Brutos)
            </h3>
            <p
              style={styles.BoxValueToDisplayMB}
            >
              {calcRenum(sliderValue1)}€
            </p>
            <div className="d-flex flex-row col-12 justify-content-center align-content-center text-center align-items-center gap-1 ps-0 pe-2 mt-0 ">
              <p
                className="ms-4"
                style={styles.BoxEndToEndValueMB}
              >
                200€
              </p>
              <div className="d-flex w-100 align-self-start">
                <MySlider
                  begginValue={0}
                  endValue={98}
                  begginString="0"
                  endString="0"
                  defaultValue={1}
                  step={1}
                  onValueChange={setSliderValue1}
                />
              </div>
              <p
                 style={styles.BoxEndToEndValueMB}
              >
                10.000€
              </p>
            </div>
          </div>
          <div className="d-flex flex-column pt-2">
            <h3
              style={styles.BelowBoxSubTitleMB}
            >
              Recebes mais que
            </h3>
            <h1
              style={styles.BelowBoxTitleMB}
            >
              {calcRenumPercentil(sliderValue1)}%
            </h1>
            <h3
             style={styles.BelowBoxSubTitleMB}
            >
              da população portuguesa
            </h3>
          </div>
        </div>

        <div className="d-lg-flex d-none flex-row overflow-hidden w-100 justify-content-center align-content-center align-items-center gap-4">
          <div className="d-flex flex-column col-6 justify-content-center align-items-center text-center gap-4">
            <div className="d-flex flex-column">
              <h1
                style={styles.TitleDST}
              >
                Afinal sou rico?
              </h1>
              <h2
                style={styles.SubTitleDST}
              >
                Comparação Salarial
              </h2>
            </div>
            <div style={styles.caixa} className="d-flex flex-column">
              <h1
                style={styles.BoxTitleDST}
              >
                Quanto recebo por mês?
              </h1>
              <h3
                style={styles.SubTitleDST}
              >
                (Brutos)
              </h3>
              <p
                style={styles.BoxValueToDisplayDST}
              >
                {calcRenum(sliderValue1)}€
              </p>
              <div className="d-flex flex-row col-12 justify-content-center align-content-center text-center align-items-center gap-4 ps-0 pe-4 mt-0 ">
                <p
                  className="ms-5"
                  style={styles.BoxEndToEndValueDST}
                >
                  200€
                </p>
                <MySlider
                  begginValue={0}
                  endValue={98}
                  begginString="0"
                  endString="0"
                  defaultValue={1}
                  step={1}
                  onValueChange={setSliderValue1}
                />
                <p
                  style={styles.BoxEndToEndValueDST}
                >
                  10.000€
                </p>
              </div>
            </div>
            <div className="d-flex flex-column">
              <h3
                style={styles.BelowBoxSubTitleDST}
              >
                Recebes mais que
              </h3>

              <h1
                style={styles.BelowBoxTitleDST}
              >
                {calcRenumPercentil(sliderValue1)}%
              </h1>
              <h3
                style={styles.BelowBoxSubTitleDST}
              >
                da população portuguesa
              </h3>
            </div>
          </div>
          <div className="d-flex col-5 overflow-hidden">
            <img src="../imgs/carteira.png" alt="" className="img-fluid p-4" />
          </div>
        </div>
      </Pagina>
      <Pagina id='3' idTo='4' title="Imobiliário" pad="3">
        <div className="d-lg-flex d-none flex-row overflow-hidden col-12 gap-5 justify-content-center align-content-center align-items-center">
          <div className="col-5 d-flex justify-content-start align-content-start text-start p-4">
            <img className="img-fluid" src="./imgs/casa.png" alt="" />
          </div>
          <div className="d-flex flex-column gap-3 col-6 justify-content-starts align-content-center text-center">
            <div className="d-flex flex-column">
              <h1
                style={styles.TitleDST}
              >
                Horas por uma casa
              </h1>
              <h2
                style={styles.SubTitleDST}
              >
                (Para uma casa de 190.000€)
              </h2>
            </div>
            <div style={styles.caixa} className="d-flex flex-column col-12">
              <h1
                style={styles.BoxTitleDST}
              >
                Quanto consigo poupar por mês:
              </h1>
              <p
                style={styles.BoxValueToDisplayDST}
              >
                {sliderValue2 * 25}€
              </p>
              <div className="d-flex flex-row col-12 justify-content-center align-content-center text-center align-items-center gap-4 ps-0 pe-4 mt-0 ">
                <p
                  className="ms-5"
                  style={styles.BoxEndToEndValueDST}
                >
                  50€
                </p>
                <MySlider
                  begginValue={2}
                  endValue={80}
                  begginString="0"
                  endString="0"
                  defaultValue={1}
                  step={1}
                  onValueChange={setSliderValue2}
                />
                <p
                   style={styles.BoxEndToEndValueDST}
                >
                  2.000€
                </p>
              </div>
              <h1
                 style={styles.BoxTitleDST}
              >
                Financiamento do Banco:
              </h1>
              <p
                style={styles.BoxValueToDisplayDST}
              >
                {sliderValue3}%
              </p>
              <div className="d-flex flex-row col-12 justify-content-center align-content-center text-center align-items-center gap-4 ps-0 pe-4 mt-0 ">
                <p
                  className="ms-5"
                  style={styles.BoxEndToEndValueDST}
                >
                  0%
                </p>
                <MySlider
                  begginValue={0}
                  endValue={90}
                  begginString="0"
                  endString="0"
                  defaultValue={1}
                  step={1}
                  onValueChange={setSliderValue3}
                />
                <p
                   style={styles.BoxEndToEndValueDST}
                >
                  90%
                </p>
              </div>
            </div>
            <div className="d-flex flex-column gap-0">
              <h1
                style={styles.BelowBoxSubTitleDST}
              >
                Terás de trabalhar:
              </h1>
              <h2
                style={styles.BelowBoxTitleDST}
              >
                {calcHoras(sliderValue2, sliderValue3).toLocaleString('pt-PT').replace(/\s/g, '.')} horas
              </h2>
              <h1
                style={styles.BelowBoxSubTitleDST}
              >
                ou {caclMeses(sliderValue3, sliderValue2)} meses{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="d-lg-none d-flex flex-column text-center justify-content-center align-content-center gap-2">
          <div className="col-12 d-flex justify-content-start align-content-start text-start p-0 align-self-center">
            <div className="d-flex col-12 flex-column align-self-center text-center">
              <h1
                style={styles.TitleMB}
              >
                Horas por uma casa
              </h1>
              <h2
                style={styles.SubTitleMB}
              >
                (Para uma casa de 190.000€)
              </h2>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-start align-content-start text-start p-0 align-self-center">
            <img className="img-fluid" src="./imgs/casa.png" alt="" />
          </div>
          <div className="col-12 d-flex justify-content-start align-content-start text-start p-0 align-self-center">
            <div
              style={styles.caixaPequena}
              className="d-flex flex-column col-12 justify-content-center text-center"
            >
              <h1
                style={styles.BoxSubTitleMB}
              >
                Quanto poupo por mês:
              </h1>
              <p
                style={styles.BoxValueToDisplayMB}
              >
                {sliderValue2 * 25}€
              </p>
              <div className="d-flex flex-row col-12 justify-content-center align-content-center text-center align-items-center gap-4 ps-0 pe-3 ps-3 mt-0 ">
                <p
                  className="ms-2"
                  style={styles.BoxEndToEndValueMB}
                >
                  50€
                </p>
                <MySlider
                  begginValue={2}
                  endValue={80}
                  begginString="0"
                  endString="0"
                  defaultValue={1}
                  step={1}
                  onValueChange={setSliderValue2}
                />
                <p
                  style={styles.BoxEndToEndValueMB}
                >
                  2.000€
                </p>
              </div>
              <h1
                style={styles.BoxSubTitleMB}
              >
                Financiamento do Banco:
              </h1>
              <p
                style={styles.BoxValueToDisplayMB}
              >
                {sliderValue3}%
              </p>
              <div className="d-flex flex-row col-12 justify-content-center align-content-center text-center align-items-center gap-4 ps-0 pe-4 mt-0 ">
                <p
                  className="ms-4"
                  style={styles.BoxEndToEndValueMB}
                >
                  0%
                </p>
                <MySlider
                  begginValue={0}
                  endValue={90}
                  begginString="0"
                  endString="0"
                  defaultValue={1}
                  step={1}
                  onValueChange={setSliderValue3}
                />
                <p
                  style={styles.BoxEndToEndValueMB}
                >
                  90%
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column gap-0">
            <h1
              style={styles.BelowBoxSubTitleMB}
            >
              Vais ter de trabalhar:
            </h1>
            <h2
              style={styles.BelowBoxTitleMB}
            >
              {calcHoras(sliderValue2, sliderValue3)} horas
            </h2>
            <h1
               style={styles.BelowBoxSubTitleMB}
            >
              Ou {caclMeses(sliderValue2, sliderValue3)} meses{" "}
            </h1>
          </div>
        </div>
      </Pagina>
      <Pagina id='4' idTo='5' cor="brancoSujo" title="Inflação" pad="3">
        <div className="d-flex d-lg-none justify-content-center text-center align-itens-center align-content-center flex-column col-12 gap-2">
          <div className="d-flex flex-column">
            <h1
              style={styles.TitleMB}
            >
              Inflação é real?
            </h1>
            <h2
              style={styles.SubTitleMB}
            >
              Simulador de Inflação
            </h2>
          </div>
          <div className="d-flex col-7 align-self-center">
            <img className="img-fluid" src="../imgs/merenda.png" />
          </div>
          <div style={styles.caixaPequena} className="d-flex flex-column">
            <div className="d-flex flex-column">
                <h3 style={styles.BoxTitleBigMB}>
                  Se tiveres hoje
                </h3>
                <h3 style={styles.BelowBoxTitleMB}>
                  20.000€
                </h3>
                <h3 style={styles.BoxTitleBigMB}>
                  daqui a
                </h3>
            </div>
    
                <p style={styles.BoxValueToDisplayMB}
                >{sliderValue4} anos</p>

            <div className="d-flex flex-row col-12 justify-content-center align-content-center text-center align-items-center gap-4 ps-0 pe-2 mt-0 ">
                  <p
                    className="ms-3"
                    style={styles.BoxEndToEndValueMB}
                  >
                    2 anos
                  </p>
                  <MySlider
                    begginValue={2}
                    endValue={30}
                    begginString="0"
                    endString="0"
                    defaultValue={1}
                    step={1}
                    onValueChange={setSliderValue4}
                  />
                  <p
                    style={styles.BoxEndToEndValueMB}
                  >
                    30 anos
                  </p>
                </div>
          </div>
          <div className="d-flex flex-column">
              <h3
                 style={styles.BelowBoxSubTitleMB}
              >
                vão valer o mesmo que
              </h3>
              <h3
                 style={styles.BelowBoxTitleMB}
              >
                {calcInflation(sliderValue4).toFixed(0)}€
              </h3>
            </div>

          
            
        </div>

        <div className="d-lg-flex d-none flex-row overflow-hidden w-100 justify-content-center align-content-center align-items-center">
          <div className="d-flex flex-column col-7 justify-content-center align-items-center text-center gap-4">
            <div className="d-flex flex-column col-12">
              <h1
                style={styles.TitleDST}
              >
                Inflação é real?
              </h1>
              <h2
                style={styles.SubTitleDST}
              >
                Simulador de Inflação
              </h2>
            </div>
            <div style={styles.caixa} className="d-flex flex-column">
              <div>
              <p style={styles.BoxTitleDST} className=""
              >Se tiveres hoje</p>
              <h1
                style={styles.BelowBoxTitleDST}
              >
                25.000€
              </h1>
              </div>
              
                <p
                  style={styles.BoxTitleDST}
                >
                  daqui a  
                </p>
                <p style={styles.BoxValueToDisplayDST}
                >{sliderValue4} anos</p>

                <div className="d-flex flex-row col-12 justify-content-center align-content-center text-center align-items-center gap-4 ps-0 pe-4 mt-0 ">
                  <p
                    className="ms-5"
                    style={styles.BoxEndToEndValueDST}
                  >
                    2 anos
                  </p>
                  <MySlider
                    begginValue={2}
                    endValue={30}
                    begginString="0"
                    endString="0"
                    defaultValue={1}
                    step={1}
                    onValueChange={setSliderValue4}
                  />
                  <p
                    style={styles.BoxEndToEndValueDST}
                  >
                    30 anos
                  </p>
                </div>
            </div>
            <div className="d-flex flex-column">
              <h3
                 style={styles.BelowBoxSubTitleDST}
              >
                vão valer o mesmo que
              </h3>
              <h3
                 style={styles.BelowBoxTitleDST}
              >
                {calcInflation(sliderValue4).toFixed(0)}€
              </h3>
            </div>
          </div>

          <div className="d-flex col-5 overflow-hidden">
            <img
              src="../imgs/merenda.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </Pagina>
      <Pagina id='5' arrow="n" title="Preço Educação" pad='3'>
      <div className="d-lg-flex d-none flex-row overflow-hidden col-12 gap-0 justify-content-center align-content-center align-items-center">
          <div className="col-5 d-flex justify-content-start align-content-start text-start p-4 border-4">
            <img className="img-fluid p-3" src="./imgs/PalmaNaDelloit.png"  style={{ opacity: 0.80 }} alt="" />
          </div>
          <div className="d-flex flex-column gap-3 col-7 justify-content-starts align-content-center text-center">
            <div className="d-flex flex-column">
              <h1
                style={styles.TitleSpecialDST}
              >
                Consegues estudar?
              </h1>
              <h2
                style={styles.SubSpecialTitleDST}
              >
                Calculadora de despesas
              </h2>
            </div>
            <div style={styles.caixa} className="d-flex flex-column col-12">
              <h1
                style={styles.BoxSpecial2TitleDST}
              >
                Renda de casa:
              </h1>
              <p
                style={styles.BoxSpecialValueToDisplayDST}
              >
                {sliderValue5*5}€
              </p>
              <div className="d-flex flex-row col-12 justify-content-center align-content-center text-center align-items-center gap-2 ps-0 pe-4 mt-0 ">
                <p
                  className="ms-5"
                  style={styles.BoxSpecialEndToEndValueDST}
                >
                  0€
                </p>
                <MySlider
                  begginValue={0}
                  endValue={200}
                  begginString="0"
                  endString="0"
                  defaultValue={1}
                  step={1}
                  onValueChange={setSliderValue5}
                />
                <p
                   style={styles.BoxSpecialEndToEndValueDST}
                >
                  1000€
                </p>
              </div>
              <h1
                 style={styles.BoxSpecialTitleDST}
              >
                Comida:
              </h1>
              <p
                style={styles.BoxSpecialValueToDisplayDST}
              >
                {sliderValue6*5}€
              </p>
              <div className="d-flex flex-row col-12 justify-content-center align-content-center text-center align-items-center gap-2 ps-0 pe-4 mt-0 ">
                <p
                  className="ms-5"
                  style={styles.BoxSpecialEndToEndValueDST}
                >
                  0€
                </p>
                <MySlider
                  begginValue={0}
                  endValue={120}
                  begginString="0"
                  endString="0"
                  defaultValue={1}
                  step={1}
                  onValueChange={setSliderValue6}
                />
                <p
                   style={styles.BoxSpecialEndToEndValueDST}
                >
                  600€
                </p>
              </div>
              <h1
                 style={styles.BoxSpecialTitleDST}
              >
                Propinas:
              </h1>
              <p
                style={styles.BoxSpecialValueToDisplayDST}
              >
                {sliderValue7*5}€
              </p>
              <div className="d-flex flex-row col-12 justify-content-center align-content-center text-center align-items-center gap-2 ps-0 pe-4 mt-0 ">
                <p
                  className="ms-5"
                  style={styles.BoxSpecialEndToEndValueDST}
                >
                  0€
                </p>
                <MySlider
                  begginValue={0}
                  endValue={300}
                  begginString="0"
                  endString="0"
                  defaultValue={1}
                  step={1}
                  onValueChange={setSliderValue7}
                />
                <p
                   style={styles.BoxSpecialEndToEndValueDST}
                >
                  1500€
                </p>
              </div>
              <h1
                 style={styles.BoxSpecialTitleDST}
              >
                Lazer:
              </h1>
              <p
                style={styles.BoxSpecialValueToDisplayDST}
              >
                {sliderValue8*5}€
              </p>
              <div className="d-flex flex-row col-12 justify-content-center align-content-center text-center align-items-center gap-2 ps-0 pe-4 mt-0 ">
                <p
                  className="ms-5"
                  style={styles.BoxSpecialEndToEndValueDST}
                >
                  0€
                </p>
                <MySlider
                  begginValue={0}
                  endValue={100}
                  begginString="0"
                  endString="0"
                  defaultValue={1}
                  step={1}
                  onValueChange={setSliderValue8}
                />
                <p
                   style={styles.BoxSpecialEndToEndValueDST}
                >
                  500€
                </p>
              </div>
              <h1
                style={styles.BoxSpecialTitleDST}
              >
                Outros:
              </h1>
              <p
                style={styles.BoxSpecialValueToDisplayDST}
              >
                {sliderValue9*5}€
              </p>
              <div className="d-flex flex-row col-12 justify-content-center align-content-center text-center align-items-center gap-2 ps-0 pe-4 mt-0 ">
                <p
                  className="ms-5"
                  style={styles.BoxSpecialEndToEndValueDST}
                >
                  0€
                </p>
                <MySlider
                  begginValue={0}
                  endValue={100}
                  begginString="0"
                  endString="0"
                  defaultValue={1}
                  step={1}
                  onValueChange={setSliderValue9}
                />
                <p
                  style={styles.BoxSpecialEndToEndValueDST}
                >
                  500€
                </p>
              </div>
            </div>
            <div className="d-flex flex-column gap-0">
              <h1
                style={styles.BelowBoxSpecialSubTitleDST}
              >
                Total:
              </h1>
              <h2
                style={styles.BelowBoxSpecialTitleDST}
              >
                {calcTotalDespesas(sliderValue5,sliderValue6,sliderValue7,sliderValue8,sliderValue9)}€/mês
              </h2>
            </div>
          </div>
        </div>
        <div className="d-lg-none d-flex flex-column text-center justify-content-center align-content-center gap-2">
          <div className="col-12 d-flex justify-content-start align-content-start text-start p-0 align-self-center">
            <div className="d-flex col-12 flex-column align-self-center text-center">
              <h1
                style={styles.TitleMB}
              >
                Horas por uma casa
              </h1>
              <h2
                style={styles.SubTitleMB}
              >
                (Para uma casa de 190.000€)
              </h2>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-start align-content-start text-start p-0 align-self-center">
            <img className="img-fluid" src="./imgs/PalmaNaDelloit.png" style={{ opacity: 0.80 }} alt="" />
          </div>
          <div className="col-12 d-flex justify-content-start align-content-start text-start p-0 align-self-center">
            <div
              style={styles.caixaPequena}
              className="d-flex flex-column col-12 justify-content-center text-center"
            >
              <h1
                style={styles.BoxSubTitleMB}
              >
                Quanto poupo por mês:
              </h1>
              <p
                style={styles.BoxValueToDisplayMB}
              >
                {sliderValue2 * 25}€
              </p>
              <div className="d-flex flex-row col-12 justify-content-center align-content-center text-center align-items-center gap-4 ps-0 pe-3 ps-3 mt-0 ">
                <p
                  className="ms-2"
                  style={styles.BoxEndToEndValueMB}
                >
                  50€
                </p>
                <MySlider
                  begginValue={2}
                  endValue={80}
                  begginString="0"
                  endString="0"
                  defaultValue={1}
                  step={1}
                  onValueChange={setSliderValue2}
                />
                <p
                  style={styles.BoxEndToEndValueMB}
                >
                  2.000€
                </p>
              </div>
              <h1
                style={styles.BoxSubTitleMB}
              >
                Financiamento do Banco:
              </h1>
              <p
                style={styles.BoxValueToDisplayMB}
              >
                {sliderValue3}%
              </p>
              <div className="d-flex flex-row col-12 justify-content-center align-content-center text-center align-items-center gap-4 ps-0 pe-4 mt-0 ">
                <p
                  className="ms-4"
                  style={styles.BoxEndToEndValueMB}
                >
                  0%
                </p>
                <MySlider
                  begginValue={0}
                  endValue={90}
                  begginString="0"
                  endString="0"
                  defaultValue={1}
                  step={1}
                  onValueChange={setSliderValue3}
                />
                <p
                  style={styles.BoxEndToEndValueMB}
                >
                  90%
                </p>
              </div>
              
              <div className="d-flex flex-row col-12 justify-content-center align-content-center text-center align-items-center gap-4 ps-0 pe-4 mt-0 ">
                <p
                  className="ms-4"
                  style={styles.BoxEndToEndValueMB}
                >
                  0%
                </p>
                <MySlider
                  begginValue={0}
                  endValue={90}
                  begginString="0"
                  endString="0"
                  defaultValue={1}
                  step={1}
                  onValueChange={setSliderValue3}
                />
                <p
                  style={styles.BoxEndToEndValueMB}
                >
                  90%
                </p>
              </div>
              <div className="d-flex flex-row col-12 justify-content-center align-content-center text-center align-items-center gap-4 ps-0 pe-4 mt-0 ">
                <p
                  className="ms-4"
                  style={styles.BoxEndToEndValueMB}
                >
                  0%
                </p>
                <MySlider
                  begginValue={0}
                  endValue={90}
                  begginString="0"
                  endString="0"
                  defaultValue={1}
                  step={1}
                  onValueChange={setSliderValue3}
                />
                <p
                  style={styles.BoxEndToEndValueMB}
                >
                  90%
                </p>
              </div>
              
              <div className="d-flex flex-row col-12 justify-content-center align-content-center text-center align-items-center gap-4 ps-0 pe-4 mt-0 ">
                <p
                  className="ms-4"
                  style={styles.BoxEndToEndValueMB}
                >
                  0%
                </p>
                <MySlider
                  begginValue={0}
                  endValue={90}
                  begginString="0"
                  endString="0"
                  defaultValue={1}
                  step={1}
                  onValueChange={setSliderValue3}
                />
                <p
                  style={styles.BoxEndToEndValueMB}
                >
                  90%
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column gap-0">
            <h1
              style={styles.BelowBoxSubTitleMB}
            >
              Vais ter de trabalhar:
            </h1>
            <h2
              style={styles.BelowBoxTitleMB}
            >
              {calcHoras(sliderValue2, sliderValue3)} horas
            </h2>
            <h1
               style={styles.BelowBoxSubTitleMB}
            >
              Ou {caclMeses(sliderValue2, sliderValue3)} meses{" "}
            </h1>
          </div>
        </div>
      </Pagina>
      <Footer/>
    </>
  );
}

export default App;
