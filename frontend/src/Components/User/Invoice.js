import React from 'react';
import jsPDF from 'jspdf'; // Install jsPDF library: npm install jspdf

const Invoice = ({ order }) => {
  const generateInvoice = () => {
    const doc = new jsPDF();
    const width = doc.internal.pageSize.getWidth();


    // Invoice Header
    doc.setFontSize(18);
    doc.text("Apnisabzi - Invoice", width / 2, 20, { align: 'center' });

    // Order ID
    doc.setFontSize(12);
    doc.text("Order ID:", 10, 35);
    doc.text(order._id, width - 30, 35, { align: 'right' });

    // Shipping Details
    doc.setFontSize(14);
    doc.text("Shipping Details:", 10, 50);
    doc.text(`Name: ${order.shippingAddress.fullName}`, 10, 60);
    doc.text(`Address: ${order.shippingAddress.address}, ${order.shippingAddress.city}, ${order.shippingAddress.country}`, 10, 65);
    doc.text(`Contact: ${order.shippingAddress.contactNo}`, 10, 70);

    // Items Header
    doc.setFontSize(14);
    doc.text("Items:", 10, 85);
    doc.text("Item", 10, 95, { width: width / 2 - 15, align: 'left' });
    doc.text("Price", width / 2, 95, { width: width / 2 - 15, align: 'right' });
    doc.line(10, 100, width - 10, 100);

    // Loop through order items
    let y = 105;
    order.orderItems.forEach((item) => {
      doc.setFontSize(12);
      doc.text(`${item.name} x ${item.quantity}`, 10, y, { width: width / 2 - 15, align: 'left' });
      doc.text(`₹${(item.price * item.quantity).toFixed(2)}`, width / 2, y, { width: width / 2 - 15, align: 'right' });
      y += 5;
    });
    
    //Shipping amount 
     doc.setFontSize(12);
    doc.line(10, y + 5, width - 10, y + 5);
    doc.text("Shipping Charges :", 10, y + 10, { width: width / 2 - 15, align: 'left' });
    doc.text(`₹${order.shippingPrice.toFixed(2)}`, width / 2, y + 10, { width: width / 2 - 15, align: 'right' });
   //Tax amount 
    y += 15;  // Increase y to provide space for the tax amount
    doc.line(10, y, width - 10, y);
    doc.text("Tax :", 10, y + 5, { width: width / 2 - 15, align: 'left' });
    doc.text(`₹${order.taxPrice.toFixed(2)}`, width / 2, y + 5, { width: width / 2 - 15, align: 'right' });

    // Total
    y += 15;  // Increase y again for the total
    doc.line(10, y, width - 10, y);
    doc.text("Total:", 10, y + 5, { width: width / 2 - 15, align: 'left' });
    doc.text(`₹${order.totalPrice.toFixed(2)}`, width / 2, y + 5, { width: width / 2 - 15, align: 'right' });
    doc.text("Estimated delivery time: 1-2 hours", 10, y + 20);  // Adjust y-coordinate for spacing

    // Thank you message
    doc.setFontSize(15);
    doc.text("Thanks for visiting ApniSabzi - fresh produce delivery application", 10, y + 40);


    // Download the PDF
    doc.save(`invoice-${order._id}.pdf`);
  };

  return (
    <div>
      <button onClick={generateInvoice}>Download Invoice</button>
    </div>
  );
};

export default Invoice;
