import React from 'react'
import styles from "../Styles/header.module.css"
import logo from "../assets/ivf-pulse-logo.png"

export default function Header() {
  return (
    <>
    <div className={styles.headerContainer}>
        <div>
            <img src={logo}  /> 
        </div>

        <div className={styles.features} >
            <span>
                Donor Programme
            </span>

            <span>
                Fertility Preservation
            </span>

            <span>
                Advanced Treatments
            </span>

            <span>
            Infertility Treatments
            </span>

            <span>
            IVF Testing
            </span>

            <span>
            About Us
            </span>

            <button>
            Talk To Us
            </button>
        </div>
    </div>
        <hr/>
    <div className={styles.leftSider}>
        <span>
        Home  /
        </span>
        <span>
        IVF Success Rate Calculator
        </span>
    </div>
        <h1>
        Which age range applies to you?
        </h1>
    <div className={styles.chekagebox}>
        <input type="radio"name="contact" />
        <label >Under 30</label>
        <input type="radio"name="contact" />
        <label >Between 30 - 34</label>
        <input type="radio"name="contact" />
         <label >Between 35 - 37</label>
        <input type="radio"name="contact" />
        <label >Between 38 - 40</label>
        <input type="radio"name="contact" />
        <label >Between 41 - 43</label>
        <input type="radio"name="contact" />
        <label >Above 43</label>
    </div>
    <h1>Number of IVF Cycles?</h1>
    <div class={styles.rangeLine}>
    <label for="slider"></label>
    <input type="range" min="0" max="100" value="30" id="slider" />
    </div>
    <h1>
    Have you undergone these procedures before?
    </h1>
    <div className={styles.iscsPro}>
        <span>
            <h3> ISCI Procedures</h3>
            <input type="radio"/>
            <label >Yes</label>
        </span>
        <span>
            <h3> PGT Testing</h3>
            <input type="radio"/>
            <label >No</label>
        </span>
    </div>
    <h2>Do you have any of these medical conditions?</h2>
    <div className={styles.iscsProoooo}>
        <span>
            <input type="checkbox"/>
            <h3> PCOS</h3>
        </span>
        <span>
            <input type="checkbox"/>
            <h3>Endometriosis</h3>
        </span>
        <span>
            <input type="checkbox"/>
            <h3>Low Ovarian Reserve</h3>
        </span>
        <span>
            <input type="checkbox"/>
            <h3>Male Factor Infertility</h3>
        </span>
    </div>
    <button id={styles.btn}>Claculate</button>

    </>
  )
}
