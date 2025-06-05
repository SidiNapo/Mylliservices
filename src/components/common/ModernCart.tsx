
import React, { useState } from 'react';
import { ShoppingCart, MapPin, Plus, Minus, Trash2, CreditCard, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  duration: string;
  image?: string;
}

interface ModernCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModernCart = ({ isOpen, onClose }: ModernCartProps) => {
  // Default address set to Mylli Services exact location
  const [deliveryAddress, setDeliveryAddress] = useState("19, rue Masmouda hay Al Hana, Casablanca - 20210, Maroc");
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Soins infirmiers à domicile",
      price: 150,
      quantity: 1,
      duration: "2 heures",
      image: "/lovable-uploads/5de6ff35-cb9d-4b50-b207-1ba6bd3bd5e0.png"
    },
    {
      id: "2", 
      name: "Aide-soignant à domicile",
      price: 120,
      quantity: 1,
      duration: "3 heures",
      image: "/lovable-uploads/cfbe77b8-0c6a-4e5c-b8f4-b2fb19e403a5.png"
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 30;
  const total = subtotal + deliveryFee;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="absolute right-0 top-0 h-full w-full max-w-lg bg-white shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-mylli-primary to-mylli-secondary p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingCart size={28} />
                <span className="absolute -top-2 -right-2 bg-mylli-accent text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>
              <h2 className="text-2xl font-bold">Votre Panier</h2>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="flex flex-col h-[calc(100vh-88px)]">
          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Address Section */}
            <Card className="border-2 border-mylli-primary/20 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-mylli-primary to-mylli-secondary flex items-center justify-center text-white">
                    <MapPin size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-mylli-dark mb-2">Adresse de service</h3>
                    <p className="text-mylli-gray text-sm leading-relaxed mb-3">
                      {deliveryAddress}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-mylli-primary text-mylli-primary hover:bg-mylli-primary hover:text-white"
                      onClick={() => {
                        const newAddress = prompt("Modifier l'adresse:", deliveryAddress);
                        if (newAddress) setDeliveryAddress(newAddress);
                      }}
                    >
                      Modifier l'adresse
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Status */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600" size={20} />
                <div>
                  <p className="text-green-800 font-medium">Service disponible</p>
                  <p className="text-green-600 text-sm">Notre équipe peut intervenir à cette adresse</p>
                </div>
              </div>
            </div>

            {/* Cart Items */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-mylli-dark">Services sélectionnés</h3>
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      {item.image && (
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      )}
                      <div className="flex-1">
                        <h4 className="font-semibold text-mylli-dark mb-1">{item.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-mylli-gray mb-2">
                          <Clock size={14} />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-mylli-primary">{item.price} MAD</span>
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-8 h-8 p-0 border-mylli-primary text-mylli-primary hover:bg-mylli-primary hover:text-white"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus size={14} />
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-8 h-8 p-0 border-mylli-primary text-mylli-primary hover:bg-mylli-primary hover:text-white"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus size={14} />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-8 h-8 p-0 ml-2 border-red-400 text-red-500 hover:bg-red-500 hover:text-white"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 size={14} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pricing Summary */}
            <Card className="bg-gradient-to-br from-mylli-light to-white border-mylli-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-mylli-dark mb-4">Résumé de la commande</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-mylli-gray">
                    <span>Sous-total</span>
                    <span>{subtotal} MAD</span>
                  </div>
                  <div className="flex justify-between text-mylli-gray">
                    <span>Frais de déplacement</span>
                    <span>{deliveryFee} MAD</span>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div className="flex justify-between text-xl font-bold text-mylli-dark">
                    <span>Total</span>
                    <span className="text-mylli-primary">{total} MAD</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="space-y-3">
              <Button 
                className="w-full bg-gradient-to-r from-mylli-primary to-mylli-secondary hover:from-mylli-primary-dark hover:to-mylli-secondary/90 text-white py-4 text-lg font-semibold rounded-xl shadow-lg"
                onClick={() => {
                  // Handle checkout
                  console.log("Proceeding to checkout with address:", deliveryAddress);
                }}
              >
                <CreditCard className="mr-2" size={20} />
                Réserver maintenant
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-mylli-primary text-mylli-primary hover:bg-mylli-primary hover:text-white py-3"
                onClick={onClose}
              >
                Continuer mes achats
              </Button>
            </div>
            <p className="text-xs text-mylli-gray text-center mt-3">
              En réservant, vous acceptez nos conditions de service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernCart;
