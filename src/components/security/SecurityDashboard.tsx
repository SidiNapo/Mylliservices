
import React, { useState, useEffect } from 'react';
import { securityMonitor } from '@/utils/securityMonitor';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, Activity, Lock } from 'lucide-react';

const SecurityDashboard: React.FC = () => {
  const [stats, setStats] = useState<any>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or if explicitly enabled
    const showDashboard = process.env.NODE_ENV === 'development' || 
                         localStorage.getItem('mylli_show_security_dashboard') === 'true';
    setIsVisible(showDashboard);

    if (showDashboard) {
      const updateStats = () => {
        setStats(securityMonitor.getSecurityStats());
      };

      updateStats();
      const interval = setInterval(updateStats, 30000); // Update every 30 seconds

      return () => clearInterval(interval);
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getSeverityVariant = (severity: string) => {
    switch (severity) {
      case 'critical': return 'destructive';
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'default';
      default: return 'outline';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="bg-white/95 backdrop-blur-sm shadow-lg border border-gray-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Shield className="h-4 w-4 text-blue-600" />
            Sécurité - Dernières 24h
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2">
              <Activity className="h-3 w-3 text-green-600" />
              <span>Événements: {stats.recentEvents || 0}</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-3 w-3 text-orange-600" />
              <span>Menaces: {stats.threatDetections || 0}</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-3 w-3 text-red-600" />
              <span>Limite atteinte: {stats.rateLimitHits || 0}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-3 w-3 text-blue-600" />
              <span>Échecs: {stats.failedSubmissions || 0}</span>
            </div>
          </div>

          {stats.eventsBySeverity && (
            <div className="space-y-1">
              <div className="text-xs font-medium text-gray-600">Par gravité:</div>
              <div className="flex flex-wrap gap-1">
                {Object.entries(stats.eventsBySeverity).map(([severity, count]) => (
                  <Badge 
                    key={severity} 
                    variant={getSeverityVariant(severity)}
                    className="text-xs px-2 py-0"
                  >
                    {severity}: {String(count)}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {stats.eventsByType && Object.keys(stats.eventsByType).length > 0 && (
            <div className="space-y-1">
              <div className="text-xs font-medium text-gray-600">Par type:</div>
              <div className="space-y-1 max-h-20 overflow-y-auto">
                {Object.entries(stats.eventsByType).map(([type, count]) => (
                  <div key={type} className="flex justify-between text-xs">
                    <span className="truncate">{type}</span>
                    <span className="font-medium">{String(count)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-xs text-gray-500 pt-2 border-t">
            Dashboard sécurité - Mode développement
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecurityDashboard;
