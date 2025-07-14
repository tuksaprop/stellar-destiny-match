
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface UserProfile {
  id: string;
  name: string;
  age: number;
  sign: string;
  compatibility: number;
  distance: string;
  bio: string;
  interests: string[];
  lastMessage?: string;
  isOnline: boolean;
  avatar: string;
}

const Home = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(null);

  const mockProfiles: UserProfile[] = [
    {
      id: "1",
      name: "Luna",
      age: 28,
      sign: "Piscis",
      compatibility: 94,
      distance: "2 km",
      bio: "Artista y soñadora. Me fascina la conexión entre arte y espiritualidad. Busco alguien con quien compartir conversaciones profundas bajo las estrellas.",
      interests: ["Arte", "Meditación", "Astrología", "Yoga"],
      lastMessage: "¡Hola! Vi que compartimos Venus en Tauro, debe ser por eso que ambos amamos la belleza en todas sus formas ✨",
      isOnline: true,
      avatar: "🎨"
    },
    {
      id: "2",
      name: "Verónica",
      age: 30,
      sign: "Escorpio",
      compatibility: 89,
      distance: "5 km",
      bio: "Psicóloga especializada en terapias holísticas. La intensidad emocional no me asusta, al contrario, la abrazo.",
      interests: ["Psicología", "Tarot", "Naturaleza", "Lectura"],
      lastMessage: "Tu Marte en Escorpio resuena mucho conmigo... ¿te apetece explorar esa intensidad juntos?",
      isOnline: false,
      avatar: "🔮"
    },
    {
      id: "3",
      name: "Sofía",
      age: 26,
      sign: "Géminis",
      compatibility: 87,
      distance: "3 km",
      bio: "Escritora y viajera. Colecciono historias y conexiones auténticas. Mi mercurio necesita una mente igual de curiosa.",
      interests: ["Escritura", "Viajes", "Filosofía", "Café"],
      isOnline: true,
      avatar: "✍️"
    },
    {
      id: "4",
      name: "Carmen",
      age: 29,
      sign: "Cáncer",
      compatibility: 85,
      distance: "7 km",
      bio: "Chef especializada en cocina consciente. Creo que la comida es amor en forma tangible.",
      interests: ["Cocina", "Jardinería", "Luna llena", "Familia"],
      lastMessage: "Tu Luna en Cáncer... definitivamente entiendes el lenguaje del corazón. ¿Te gusta cocinar?",
      isOnline: false,
      avatar: "👩‍🍳"
    },
    {
      id: "5",
      name: "Isabella",
      age: 32,
      sign: "Leo",
      compatibility: 83,
      distance: "4 km",
      bio: "Bailarina y profesora de danza. El movimiento es mi forma de oración. Busco alguien que celebre la vida conmigo.",
      interests: ["Danza", "Teatro", "Sol", "Creatividad"],
      isOnline: true,
      avatar: "💃"
    }
  ];

  useEffect(() => {
    // Cargar información del usuario del localStorage
    const savedUserData = localStorage.getItem("userOnboardingData");
    if (savedUserData) {
      setUserInfo(JSON.parse(savedUserData));
    }

    // Simular carga de perfiles compatibles
    setProfiles(mockProfiles);
  }, []);

  const getCompatibilityColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-400";
    if (percentage >= 80) return "text-yellow-400";
    return "text-orange-400";
  };

  const getCompatibilityBadgeColor = (percentage: number) => {
    if (percentage >= 90) return "bg-green-500/20 text-green-400 border-green-500/30";
    if (percentage >= 80) return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    return "bg-orange-500/20 text-orange-400 border-orange-500/30";
  };

  return (
    <div className="min-h-screen bg-cosmic-blue">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-cosmic-gold">AlmaEstelar</h1>
            {userInfo && (
              <div className="hidden md:block">
                <p className="text-white text-sm">
                  Hola, <span className="text-cosmic-gold">{userInfo.fullName.split(' ')[0]}</span>
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cosmic-magenta to-cosmic-gold rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">
                {userInfo?.fullName?.[0] || "U"}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lista de Perfiles */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Tus Conexiones Cósmicas</h2>
              <p className="text-gray-300 text-sm">
                Perfiles altamente compatibles según tu carta natal
              </p>
            </div>

            <div className="space-y-4">
              {profiles.map((profile) => (
                <Card
                  key={profile.id}
                  className={`bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 cursor-pointer transition-all duration-200 ${
                    selectedProfile?.id === profile.id ? "ring-2 ring-cosmic-magenta" : ""
                  }`}
                  onClick={() => setSelectedProfile(profile)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-cosmic-magenta to-cosmic-gold rounded-full flex items-center justify-center text-xl">
                          {profile.avatar}
                        </div>
                        {profile.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-cosmic-blue"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-white truncate">
                            {profile.name}, {profile.age}
                          </h3>
                          <Badge className={`text-xs ${getCompatibilityBadgeColor(profile.compatibility)}`}>
                            {profile.compatibility}% ✨
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-cosmic-gold text-sm">{profile.sign}</span>
                          <span className="text-gray-400 text-xs">•</span>
                          <span className="text-gray-400 text-xs">{profile.distance}</span>
                        </div>

                        {profile.lastMessage && (
                          <p className="text-gray-300 text-xs truncate">
                            {profile.lastMessage}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Perfil Detallado */}
          <div className="lg:col-span-2">
            {selectedProfile ? (
              <Card className="bg-white/10 backdrop-blur-md border-white/20 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-r from-cosmic-magenta to-cosmic-gold rounded-full flex items-center justify-center text-3xl">
                        {selectedProfile.avatar}
                      </div>
                      {selectedProfile.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-cosmic-blue flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-2xl font-bold text-white">
                          {selectedProfile.name}, {selectedProfile.age}
                        </h2>
                        <Badge className={`${getCompatibilityBadgeColor(selectedProfile.compatibility)}`}>
                          {selectedProfile.compatibility}% Compatible ✨
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="text-cosmic-gold font-medium">{selectedProfile.sign}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400">{selectedProfile.distance}</span>
                        <span className="text-gray-400">•</span>
                        <span className={selectedProfile.isOnline ? "text-green-400" : "text-gray-400"}>
                          {selectedProfile.isOnline ? "En línea" : "Desconectada"}
                        </span>
                      </div>

                      <p className="text-gray-300 mb-4">
                        {selectedProfile.bio}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-cosmic-gold font-medium mb-2">Intereses:</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProfile.interests.map((interest, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="bg-white/5 text-white border-white/20"
                            >
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Button className="w-full bg-cosmic-magenta hover:bg-cosmic-magenta/80 text-white">
                          💬 Enviar mensaje
                        </Button>
                        <div className="grid grid-cols-2 gap-3">
                          <Button variant="outline" className="border-cosmic-gold text-cosmic-gold hover:bg-cosmic-gold/10">
                            ⭐ Ver carta natal
                          </Button>
                          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                            🔮 Análisis de sinastría
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {selectedProfile.lastMessage && (
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h4 className="text-cosmic-gold text-sm font-medium mb-2">Último mensaje:</h4>
                      <p className="text-gray-300 text-sm italic">"{selectedProfile.lastMessage}"</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white/10 backdrop-blur-md border-white/20 h-full">
                <CardContent className="p-6 flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="text-6xl mb-4">✨</div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Selecciona un perfil
                    </h3>
                    <p className="text-gray-300">
                      Elige una de tus conexiones cósmicas para ver más detalles y comenzar una conversación
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
