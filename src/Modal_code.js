<div className="container">
                    <h1>Checkout Form</h1>
            <form className="form cf">
                <section className="plan cf">
                    <h2>Choose a plan:</h2>
                    <input type="radio" name="radio1" id="free" value="free"/>
                    <label className="free-label four col" for="free">Free</label>
                    <input type="radio" name="radio1" id="basic" value="basic"/>
                    <label className="basic-label four col" for="basic">Basic</label>
                    <input type="radio" name="radio1" id="premium" value="premium"/>
                    <label className="premium-label four col" for="premium">Premium</label>
                </section>

                    <h2>Select a payment plan:</h2>
                <section className="payment-plan cf">
                    <input type="radio" name="radio2" id="monthly" value="monthly"/>
                    <label className="monthly-label four col" for="monthly">Monthly</label>
                    <input type="radio" name="radio2" id="yearly" value="yearly"/>
                    <label className="yearly-label four col" for="yearly">Yearly</label>
			    </section>
                
                    <h2>Select a payment type:</h2>
                <section className="payment-type cf">
                    <input type="radio" name="radio3" id="credit" value="credit"/>
                    <label className="credit-label four col" for="credit">Credit Card</label>
                    <input type="radio" name="radio3" id="debit" value="debit"/>
                    <label className="debit-label four col" for="debit">Debit Card</label>
                    <input type="radio" name="radio3" id="paypal" value="paypal" />
                    <label className="paypal-label four col" for="paypal">Paypal</label>
                </section>	

			    <input className="submit" type="submit" value="Submit" />		

            </form>

            </div> 