
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Landing = () => {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState("Luna");

  const profiles = [
    { name: "Luna", age: 28, sign: "Piscis", compatibility: [85, 75, 90, 80, 88] },
    { name: "Julieta", age: 25, sign: "Cáncer", compatibility: [78, 82, 85, 75, 83] },
    { name: "Verónica", age: 30, sign: "Escorpio", compatibility: [90, 88, 85, 92, 89] },
    { name: "Gonzalo", age: 32, sign: "Tauro", compatibility: [82, 79, 88, 85, 84] }
  ];

  const pillars = [
    {
      icon: "☀️",
      title: "Signo Solar",
      description: "Tu esencia central y personalidad principal",
      details: "El signo solar representa tu núcleo interno, tu ego y la forma en que expresas tu individualidad. Es la base de tu personalidad y define tus motivaciones principales."
    },
    {
      icon: "🌙",
      title: "Signo Lunar",
      description: "Tu mundo emocional y necesidades profundas",
      details: "La Luna revela tu naturaleza emocional, tus instintos y cómo procesas los sentimientos. Determina qué necesitas para sentirte seguro y amado."
    },
    {
      icon: "💖",
      title: "Venus y Marte",
      description: "Tu estilo de amor y atracción",
      details: "Venus muestra cómo amas y qué te atrae, mientras Marte revela tu energía sexual y cómo persigues lo que deseas. Juntos definen tu estilo romántico."
    },
    {
      icon: "🏠",
      title: "Casas y Aspectos",
      description: "El contexto y las dinámicas energéticas",
      details: "Las casas muestran las áreas de vida donde se manifiestan las energías planetarias, mientras los aspectos revelan cómo interactúan entre sí."
    }
  ];

  const testimonials = [
    {
      name: "Marcos",
      age: 34,
      text: "Nunca creí en la astrología hasta que conocí a mi pareja aquí. Nuestras cartas natales encajaban perfectamente y llevamos 2 años juntos.",
      highlighted: false
    },
    {
      name: "Carmen",
      age: 28,
      text: "El análisis de compatibilidad fue increíblemente preciso. Encontré a alguien que realmente me entiende a nivel profundo.",
      highlighted: true
    },
    {
      name: "David",
      age: 31,
      text: "La conexión que encontré aquí va más allá de lo físico. Es como si hubiéramos estado destinados a encontrarnos.",
      highlighted: false
    }
  ];

  const currentProfile = profiles.find(p => p.name === selectedProfile) || profiles[0];
  const compatibilityLabels = ['Armonía Emocional', 'Estímulo Intelectual', 'Química Física', 'Flujo de Comunicación', 'Potencial a Largo Plazo'];

  return (
    <div className="min-h-screen bg-cosmic-blue text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-blue/50 to-cosmic-blue"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cosmic-gold to-cosmic-magenta bg-clip-text text-transparent">
            Tu alma gemela está escrita en las estrellas
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            El universo ha conspirado para este momento. Conecta con tu destino cósmico a través de tu carta natal única y nuestro algoritmo de sinastría avanzado.
          </p>
          <Button
            onClick={() => navigate("/onboarding")}
            className="bg-gradient-to-r from-cosmic-magenta to-purple-600 hover:from-cosmic-magenta/80 hover:to-purple-600/80 text-white px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            ✨ Descubre mi alma gemela ✨
          </Button>
        </div>
      </section>

      {/* Tu Viaje Cósmico Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cosmic-gold">Tu Viaje Cósmico</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Esta sección interactiva demuestra cómo transformamos tus datos natales en una conexión real. 
              Sigue los pasos para ver cómo funciona nuestro análisis de compatibilidad.
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <Tabs defaultValue="datos" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/5">
                  <TabsTrigger value="datos" className="text-white data-[state=active]:bg-cosmic-magenta">
                    1. Ingresa tus Datos
                  </TabsTrigger>
                  <TabsTrigger value="compatibilidad" className="text-white data-[state=active]:bg-cosmic-magenta">
                    2. Compatibilidad
                  </TabsTrigger>
                  <TabsTrigger value="conexion" className="text-white data-[state=active]:bg-cosmic-magenta">
                    3. Conexión Cósmica
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="datos" className="space-y-6">
                  <h3 className="text-2xl font-semibold text-cosmic-gold mb-4">📅 Tu Huella Cósmica</h3>
                  <p className="text-gray-300 mb-6">
                    Para revelar tu carta natal única, necesitamos tus datos de nacimiento. Esta información es la clave 
                    para desbloquear un análisis de compatibilidad profundo y preciso. En esta demostración, usaremos datos de ejemplo.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre</label>
                      <input
                        type="text"
                        value="Alex"
                        readOnly
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Fecha, Hora y Lugar de Nacimiento</label>
                      <input
                        type="text"
                        value="15 de Abril, 1995, 04:30 AM, Madrid"
                        readOnly
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                      />
                    </div>
                  </div>
                  <Button className="bg-cosmic-magenta hover:bg-cosmic-magenta/80 text-white">
                    Calcular mi Carta Natal
                  </Button>
                </TabsContent>

                <TabsContent value="compatibilidad" className="space-y-6">
                  <h3 className="text-2xl font-semibold text-cosmic-gold mb-4">
                    Análisis de Compatibilidad con {currentProfile.name}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">Selecciona un perfil:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {profiles.map((profile) => (
                          <Button
                            key={profile.name}
                            variant={selectedProfile === profile.name ? "default" : "outline"}
                            onClick={() => setSelectedProfile(profile.name)}
                            className={`p-4 text-center ${
                              selectedProfile === profile.name 
                                ? "bg-cosmic-magenta text-white" 
                                : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                            }`}
                          >
                            <div>
                              <div className="font-semibold">{profile.name}</div>
                              <div className="text-sm opacity-75">{profile.age} años, {profile.sign}</div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">Compatibilidad:</h4>
                      <div className="space-y-3">
                        {compatibilityLabels.map((label, index) => (
                          <div key={label} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>{label}</span>
                              <span>{currentProfile.compatibility[index]}%</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-cosmic-magenta to-cosmic-gold h-2 rounded-full transition-all duration-500"
                                style={{ width: `${currentProfile.compatibility[index]}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="conexion" className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-cosmic-gold mb-4">💖 ¡Conexión Cósmica Encontrada!</h3>
                    <div className="bg-white/5 rounded-lg p-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-cosmic-magenta to-cosmic-gold rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                        {currentProfile.name[0]}
                      </div>
                      <h4 className="text-xl font-semibold">{currentProfile.name}</h4>
                      <p className="text-cosmic-gold">{currentProfile.age} años • {currentProfile.sign}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-300">
                      Tu conexión con {currentProfile.name} muestra una armonía excepcional. Vuestra Luna en aspectos favorables 
                      indica una profunda comprensión emocional, mientras que Venus sugiere una atracción magnética natural.
                    </p>
                    
                    <div>
                      <h5 className="font-semibold mb-3 text-cosmic-gold">Iniciadores de conversación:</h5>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Pregúntale a {currentProfile.name} sobre su pasión por el arte y la creatividad</li>
                        <li>• Vuestros nodos lunares sugieren un vínculo kármico profundo</li>
                        <li>• Compartís una visión similar sobre el crecimiento espiritual</li>
                      </ul>
                    </div>

                    <Button className="w-full bg-cosmic-magenta hover:bg-cosmic-magenta/80 text-white">
                      Enviar un Mensaje a {currentProfile.name}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Los Pilares de la Conexión */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cosmic-gold">Los Pilares de la Conexión</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Nuestra plataforma va más allá del signo solar. Analizamos los componentes clave de tu carta natal 
              para revelar la verdadera dinámica de una relación.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {pillar.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-cosmic-gold">{pillar.title}</h3>
                      <p className="text-gray-300 text-sm">{pillar.description}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="bg-cosmic-blue border-white/20 text-white">
                  <DialogHeader>
                    <DialogTitle className="text-cosmic-gold flex items-center gap-2">
                      <span className="text-2xl">{pillar.icon}</span>
                      {pillar.title}
                    </DialogTitle>
                    <DialogDescription className="text-gray-300">
                      {pillar.details}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-cosmic-gold">
            Miles ya encontraron su destino cósmico
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`bg-white/10 backdrop-blur-md border-white/20 ${
                  testimonial.highlighted ? "ring-2 ring-cosmic-magenta scale-105" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cosmic-magenta to-cosmic-gold rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                    {testimonial.name[0]}
                  </div>
                  <p className="text-gray-300 text-center mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-cosmic-gold text-center font-semibold">
                    {testimonial.name}, {testimonial.age} años
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-cosmic-gold">¿Listo para alinear tus estrellas?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad y comienza tu viaje para encontrar una conexión que estaba destinada a ser.
          </p>
          
          <Button
            onClick={() => navigate("/onboarding")}
            className="bg-gradient-to-r from-cosmic-magenta to-purple-600 hover:from-cosmic-magenta/80 hover:to-purple-600/80 text-white px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 mb-8"
          >
            ✨ Crear mi perfil cósmico ✨
          </Button>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Términos y condiciones</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de privacidad</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
          </div>

          <p className="text-gray-500 text-sm">© 2025 AlmaEstelar. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
