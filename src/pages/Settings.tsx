
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Bell, Moon, Sun, Globe, Lock, User } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />
      <main className="pt-24 pb-8 px-4 md:ml-64">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-brand-dark mb-6">Settings</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-medium text-brand-dark mb-4">Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Moon className="h-5 w-5 text-neutral-gray" />
                      <span>Dark Mode</span>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-neutral-gray" />
                      <span>Notifications</span>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-medium text-brand-dark mb-4">Account</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-neutral-gray" />
                      <span>Profile Visibility</span>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Lock className="h-5 w-5 text-neutral-gray" />
                      <span>Two-Factor Authentication</span>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-brand-dark mb-4">Language</h3>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-neutral-gray" />
                  <select className="flex-1 rounded-lg border border-gray-200 p-2">
                    <option>English</option>
                    <option>Swedish</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
