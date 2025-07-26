
import { MessageCircle } from "lucide-react"

export function WhatsAppSimple() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+5493446597723"
    const message = "Hola! Me interesa conocer más sobre tus servicios de desarrollo web."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }


  return (
    <button
      onClick={handleWhatsAppClick}
      style={{
        position: "fixed",
        bottom: "50px",
        right: "30px",
        width: "60px",
        height: "60px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        zIndex: 9999,
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "scale(1.1)"
        e.target.style.backgroundColor = "#128C7E"
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "scale(1)"
        e.target.style.backgroundColor = "#25D366"
      }}
      title="¡Contactar por WhatsApp!"
    >
      <MessageCircle size={24} color="white" />
    </button>
  )
}
