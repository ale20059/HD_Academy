import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import '../css/Donate.css';

function Donate() {
    const [monto, setMonto] = useState("5.00");

    return (
        <PayPalScriptProvider options={{ "client-id": "test", components: "buttons", currency: "USD" }}>
            <div className="donate-container">
                <div className="donate-card">
                    <h3>Apoya nuestro proyecto</h3>
                    <p>Tu contribución ayuda a seguir creciendo.</p>

                    <div className="amount-input-container">
                        <span className="currency-symbol">$</span>
                        <input
                            type="number"
                            value={monto}
                            onChange={(e) => setMonto(e.target.value)}
                            min={1}
                            className="donate-input"
                        />
                        <span className="currency-code">USD</span>
                    </div>

                    {/* Botones de montos rápidos */}
                    <div className="quick-amounts">
                        {["5.00", "10.00", "20.00"].map((amt) => (
                            <button key={amt} onClick={() => setMonto(amt)} className={monto === amt ? "active" : ""}>
                                ${amt}
                            </button>
                        ))}
                    </div>

                    <div className="paypal-button-wrapper">
                        <PayPalButtons
                            key={monto}
                            style={{ layout: "vertical", label: "donate", shape: "rect" }}
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [{
                                        amount: {
                                            value: monto,
                                            breakdown: {
                                                item_total: { currency_code: "USD", value: monto }
                                            }
                                        },
                                        description: "Donacion para el proyecto HD.ACADEMY"
                                    }],
                                });
                            }}
                            onApprove={(data, actions) => {
                                return actions.order.capture().then((details) => {
                                    alert(`¡Gracias por tu donacion, ${details.payer.name.given_name}!`);
                                });
                            }}
                        />
                    </div>
                </div>
            </div>
        </PayPalScriptProvider>
    );
}

export default Donate;