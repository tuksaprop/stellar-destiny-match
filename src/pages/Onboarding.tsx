
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Onboarding = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    lookingFor: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar que todos los campos estén completos
    const requiredFields = Object.values(formData);
    if (requiredFields.some(field => !field.trim())) {
      alert("Por favor, completa todos los campos");
      return;
    }

    // Guardar datos en localStorage para simular persistencia
    localStorage.setItem("userOnboardingData", JSON.stringify(formData));
    
    // Navegar a la página de loading
    navigate("/loading");
  };

  return (
    <div className="min-h-screen bg-cosmic-blue flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ✨ Crear tu Perfil Cósmico
          </h1>
          <p className="text-gray-300 text-lg">
            Necesitamos algunos datos para calcular tu carta natal y encontrar tu conexión perfecta
          </p>
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-cosmic-gold text-center">
              🌟 Tu Información Natal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre Completo */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-white text-sm font-medium">
                  Nombre Completo
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Tu nombre completo"
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-cosmic-magenta"
                  required
                />
              </div>

              {/* Género */}
              <div className="space-y-3">
                <Label className="text-white text-sm font-medium">Género</Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(value) => handleInputChange("gender", value)}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mujer" id="mujer" className="border-white/20 text-cosmic-magenta" />
                    <Label htmlFor="mujer" className="text-white">Mujer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hombre" id="hombre" className="border-white/20 text-cosmic-magenta" />
                    <Label htmlFor="hombre" className="text-white">Hombre</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="otro" id="otro" className="border-white/20 text-cosmic-magenta" />
                    <Label htmlFor="otro" className="text-white">Otro</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Fecha de Nacimiento */}
              <div className="space-y-2">
                <Label htmlFor="birthDate" className="text-white text-sm font-medium">
                  Fecha de Nacimiento
                </Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange("birthDate", e.target.value)}
                  className="bg-white/10 border-white/20 text-white focus:border-cosmic-magenta [color-scheme:dark]"
                  required
                />
              </div>

              {/* Horario de Nacimiento */}
              <div className="space-y-2">
                <Label htmlFor="birthTime" className="text-white text-sm font-medium">
                  Horario de Nacimiento
                </Label>
                <Input
                  id="birthTime"
                  type="time"
                  value={formData.birthTime}
                  onChange={(e) => handleInputChange("birthTime", e.target.value)}
                  className="bg-white/10 border-white/20 text-white focus:border-cosmic-magenta [color-scheme:dark]"
                  required
                />
                <p className="text-xs text-gray-400">
                  Si no sabes la hora exacta, puedes usar 12:00 PM como aproximación
                </p>
              </div>

              {/* Lugar de Nacimiento */}
              <div className="space-y-2">
                <Label htmlFor="birthPlace" className="text-white text-sm font-medium">
                  Lugar de Nacimiento
                </Label>
                <Input
                  id="birthPlace"
                  type="text"
                  value={formData.birthPlace}
                  onChange={(e) => handleInputChange("birthPlace", e.target.value)}
                  placeholder="Ciudad, País"
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-cosmic-magenta"
                  required
                />
              </div>

              {/* Qué Busco */}
              <div className="space-y-3">
                <Label className="text-white text-sm font-medium">¿Qué buscas?</Label>
                <RadioGroup
                  value={formData.lookingFor}
                  onValueChange={(value) => handleInputChange("lookingFor", value)}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="relacion-seria" id="relacion-seria" className="border-white/20 text-cosmic-magenta" />
                    <Label htmlFor="relacion-seria" className="text-white">Una relación seria</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="conexion-especial" id="conexion-especial" className="border-white/20 text-cosmic-magenta" />
                    <Label htmlFor="conexion-especial" className="text-white">Una conexión especial</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="amistad-profunda" id="amistad-profunda" className="border-white/20 text-cosmic-magenta" />
                    <Label htmlFor="amistad-profunda" className="text-white">Una amistad profunda</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="explorar" id="explorar" className="border-white/20 text-cosmic-magenta" />
                    <Label htmlFor="explorar" className="text-white">Explorar y ver qué surge</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Botón de Submit */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cosmic-magenta to-purple-600 hover:from-cosmic-magenta/80 hover:to-purple-600/80 text-white py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  🔮 Calcular mi Carta Natal
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Botón para volver */}
        <div className="text-center mt-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-gray-400 hover:text-white"
          >
            ← Volver al inicio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
