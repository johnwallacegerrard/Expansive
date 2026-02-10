import React from "react";

const pricingPlans = [
  {
    title: "Standard Studio Move",
    description:
      "Basic move for studios or small 1-bedroom. Includes 2 trained movers, protection wrap, and on-time service.",
    price: "$550",
    color: "#0077cc",
    buttonColor: "#0077cc",
  },
  {
    title: "Standard 1–2 Bedroom Move",
    description:
      "Local move with 2–3 movers, full protection, and guaranteed completion.",
    price: "$850",
    color: "#0077cc",
    buttonColor: "#0077cc",
  },
  {
    title: "Premium 1–2 Bedroom Move",
    description:
      "Priority booking, top-trained crew, full protection, and fast completion.",
    price: "$1,050",
    color: "#ff9900",
    buttonColor: "#ff9900",
  },
  {
    title: "Premium 2–3 Bedroom Move",
    description:
      "Higher-volume move with all premium protections included.",
    price: "$1,750",
    color: "#ff9900",
    buttonColor: "#ff9900",
  },
  {
    title: "White-Glove Move",
    description:
      "Includes specialty items, packing service, and full handling protection.",
    price: "$2,450+",
    color: "#cc0000",
    buttonColor: "#cc0000",
  },
  {
    title: "Clean & Move Concierge",
    description:
      "Move plus post-move cleaning included. A turnkey, stress-free solution.",
    price: "$1,450–$2,150",
    color: "#00aa66",
    buttonColor: "#00aa66",
  },
];

export default function PricingSection() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Our Pricing</h2>
        <p style={styles.subheading}>
          Stress-free moves with guaranteed protection. Choose the package that fits your needs.
        </p>

        <div style={styles.grid}>
          {pricingPlans.map((plan, index) => (
            <div key={index} style={styles.card}>
              <h3 style={{ ...styles.cardTitle, color: plan.color }}>
                {plan.title}
              </h3>
              <p style={styles.description}>{plan.description}</p>
              <div style={styles.price}>{plan.price}</div>
              <a
                href="tel:+16074819559"
                style={{ ...styles.button, backgroundColor: plan.buttonColor }}
              >
                Reserve Spot
              </a>
            </div>
          ))}
        </div>

        <div style={styles.depositBox}>
          <h3 style={styles.depositTitle}>Secure Your Spot Today</h3>
          <p style={styles.depositText}>
            A small <strong>$100 deposit</strong> reserves your crew and move date.
            The balance is due after completion — no surprises, no hidden fees.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "10px",
    color: "#111",
  },
  subheading: {
    fontSize: "18px",
    marginBottom: "40px",
    color: "#555",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "30px",
    maxWidth: "300px",
    flex: "1 1 260px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  description: {
    color: "#555",
    marginBottom: "20px",
    fontSize: "15px",
  },
  price: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#111",
  },
  button: {
    display: "inline-block",
    padding: "12px 24px",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  depositBox: {
    marginTop: "60px",
    backgroundColor: "#0077cc",
    color: "#fff",
    padding: "30px",
    borderRadius: "16px",
  },
  depositTitle: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  depositText: {
    fontSize: "17px",
    maxWidth: "700px",
    margin: "0 auto",
  },
};
