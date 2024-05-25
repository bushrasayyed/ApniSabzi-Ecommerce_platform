import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const FAQSection = () => {
  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <Collapse accordion>
        <Panel header="How do I register as a vendor?" key="1">
          <p>
            To register as a vendor, navigate to the registration page and
            select the option for vendors. Fill out the required information
            and submit the form.
          </p>
        </Panel>
        <Panel header="How do I add products to my store?" key="2">
          <p>
            After logging in to your vendor account, you can navigate to the
            product management section. From there, you can add new products
            by providing the necessary details such as name, description, price,
            quantity, and image.
          </p>
        </Panel>
        <Panel header="How can I track my sales?" key="3">
          <p>
            You can track your sales by accessing the sales dashboard in your
            vendor account. The dashboard provides information about your
            orders, revenue, and other sales-related metrics.
          </p>
        </Panel>
        <Panel header="What are the payment options available for vendors?" key="4">
          <p>
            We offer multiple payment options for vendors, including bank transfers,
            PayPal, and Stripe. You can choose your preferred payment method
            during the registration process.
          </p>
        </Panel>
        <Panel header="How do I manage my inventory?" key="5">
          <p>
            You can manage your inventory by accessing the inventory management
            section in your vendor dashboard. From there, you can view your
            current stock levels, add new products, update quantities, and
            remove items as needed.
          </p>
        </Panel>
        <Panel header="What is the process for handling returns and refunds?" key="6">
          <p>
            If a customer requests a return or refund for a product, you can
            handle the process through your vendor dashboard. You can review
            the return/refund request, communicate with the customer, and
            process the refund according to your store's policies.
          </p>
        </Panel>
        {/* Add more FAQ panels as needed */}
      </Collapse>
    </div>
  );
};

export default FAQSection;
