import React from 'react';
import classes from './Dropdown.module.css'

const Dropdown1 = () => {
    return (
        <div className=''>
            <section className={classes.container}>

                <div className={classes.ac}>

                    <input className={classes.ac_input} id="ac-1" name="ac-1" type="checkbox" />
                    <label className={classes.ac_label} htmlFor="ac-1">Green Planet Run 2022</label>

                    <article className={classes.ac_text}>

                        <div className={classes.ac_sub}>
                            <input className={classes.ac_input} id="ac-2" name="ac-2" type="checkbox" />
                            <label className={classes.ac_label} htmlFor="ac-2">5 KM Results</label>
                            <article className={classes.ac_sub_text}>
                                <div className={classes.box}>1 place : ABCXYZ</div>
                                <div className={classes.box}>2 place : ABCXYZ</div>
                                <div className={classes.box}>3 place : ABCXYZ</div>
                                <div className={classes.box}>4 place : ABCXYZ</div>
                            </article>
                        </div>

                        <div className={classes.ac_sub}>
                            <input className={classes.ac_input} id="ac-3" name="ac-3" type="checkbox" />
                            <label className={classes.ac_label} htmlFor="ac-3">10 KM Results</label>
                            <article className={classes.ac_sub_text}>
                                <div className={classes.box}>1 place : ABCXYZ</div>
                                <div className={classes.box}>2 place : ABCXYZ</div>
                                <div className={classes.box}>3 place : ABCXYZ</div>
                                <div className={classes.box}>4 place : ABCXYZ</div>
                            </article>
                        </div>
                    </article>
                </div>


                <div className={classes.ac}>

                    <input className={classes.ac_input} id="ac-4" name="ac-4" type="checkbox" />
                    <label className={classes.ac_label} htmlFor="ac-4">Green Planet Run 2023</label>

                    <article className={classes.ac_text}>

                        <div className={classes.ac_sub}>
                            <input className={classes.ac_input} id="ac-5" name="ac-5" type="checkbox" />
                            <label className={classes.ac_label} htmlFor="ac-5">5 KM Results</label>
                            <article className={classes.ac_sub_text}>
                                <div className={classes.box}>1 place : ABCXYZ</div>
                                <div className={classes.box}>2 place : ABCXYZ</div>
                                <div className={classes.box}>3 place : ABCXYZ</div>
                                <div className={classes.box}>4 place : ABCXYZ</div>
                            </article>
                        </div>

                        <div className={classes.ac_sub}>
                            <input className={classes.ac_input} id="ac-6" name="ac-6" type="checkbox" />
                            <label className={classes.ac_label} htmlFor="ac-6">10 KM Results</label>
                            <article className={classes.ac_sub_text}>
                                <div className={classes.box}>1 place : ABCXYZ</div>
                                <div className={classes.box}>2 place : ABCXYZ</div>
                                <div className={classes.box}>3 place : ABCXYZ</div>
                                <div className={classes.box}>4 place : ABCXYZ</div>
                            </article>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Dropdown1;
