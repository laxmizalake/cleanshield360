import React from "react";
import "../styles/maintenance.css";
import { useNavigate } from "react-router-dom";

const Maintenance = () => {
  const navigate = useNavigate();

  // Redirect to Contact page
  const handleRequest = () => {
    navigate("/contact");
  };

  const maintenanceServices = [
    {
      title: "Electrical Maintenance",
      icon: "🔌",
      description: "Professional electrical inspection and repair service.",
      features: [
        "Wiring checks",
        "Switchboard repairs",
        "Load testing",
        "UPS/Generator support",
      ],
    },
    {
      title: "Plumbing Services",
      icon: "🚰",
      description: "Complete plumbing installation and maintenance.",
      features: [
        "Leak fixing",
        "Pipeline installation",
        "Washroom maintenance",
        "Drain & tank cleaning",
      ],
    },
    {
      title: "HVAC Maintenance",
      icon: "❄️",
      description: "Cooling, heating, and ventilation maintenance.",
      features: [
        "AC servicing",
        "Duct cleaning",
        "Ventilation repair",
        "Filter replacement",
      ],
    },
    {
      title: "Facility Upkeep",
      icon: "🏢",
      description: "Complete building upkeep and renovations.",
      features: [
        "Building inspection",
        "Painting & patchwork",
        "Furniture repair",
        "Preventive maintenance",
      ],
    },
  ];

  return (
    <div className="maintenance-wrapper">

      {/* Header */}
      <div className="maintenance-header">
        <h2>Maintenance Services</h2>
        <p>
          Quick and reliable maintenance services with certified technicians
          offering electrical, plumbing, HVAC, and facility upkeep solutions.
        </p>
      </div>

      {/* Card Grid */}
      <div className="maintenance-grid">
        {maintenanceServices.map((service, index) => (
          <div className="maint-card" key={index}>
            <div className="maint-icon">{service.icon}</div>

            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <ul className="maint-features">
              {service.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>

            <button className="maint-btn" onClick={handleRequest}>
              Request Technician
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Maintenance;
