
import { Moon, Palette, Terminal, Sparkles, Monitor } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTheme } from "next-themes";
import { toast } from "sonner";

const Settings = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    toast.success(`Theme switched to ${newTheme}!`, {
      duration: 2000,
    });
  };

  return (
    <div className="bg-background border-border rounded-xl p-6 shadow-sm border">
      <h2 className="text-2xl font-semibold text-foreground mb-6">
        Application Settings
      </h2>
      
      <div className="space-y-6">
        {/* Theme Settings */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Palette className="h-5 w-5 text-primary" />
            <div>
              <Label className="text-base font-medium text-foreground">Theme</Label>
              <p className="text-sm text-muted-foreground">Choose your visual style</p>
            </div>
          </div>

          <RadioGroup
            defaultValue={theme}
            onValueChange={handleThemeChange}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2"
          >
            <div>
              <RadioGroupItem
                value="system"
                id="system"
                className="peer sr-only"
              />
              <Label
                htmlFor="system"
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
              >
                <div className="flex items-center gap-4">
                  <Monitor className="h-5 w-5" />
                  <div>System Default</div>
                </div>
              </Label>
            </div>

            <div>
              <RadioGroupItem
                value="light"
                id="light"
                className="peer sr-only"
              />
              <Label
                htmlFor="light"
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
              >
                <div className="flex items-center gap-4">
                  <Sparkles className="h-5 w-5" />
                  <div>Light Mode</div>
                </div>
              </Label>
            </div>

            <div>
              <RadioGroupItem
                value="dark"
                id="dark"
                className="peer sr-only"
              />
              <Label
                htmlFor="dark"
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
              >
                <div className="flex items-center gap-4">
                  <Moon className="h-5 w-5" />
                  <div>Dark Mode</div>
                </div>
              </Label>
            </div>

            <div>
              <RadioGroupItem
                value="soft-pastel"
                id="soft-pastel"
                className="peer sr-only"
              />
              <Label
                htmlFor="soft-pastel"
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
              >
                <div className="flex items-center gap-4">
                  <Palette className="h-5 w-5" />
                  <div>Soft Pastel</div>
                </div>
              </Label>
            </div>

            <div>
              <RadioGroupItem
                value="dos-prompt"
                id="dos-prompt"
                className="peer sr-only"
              />
              <Label
                htmlFor="dos-prompt"
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
              >
                <div className="flex items-center gap-4">
                  <Terminal className="h-5 w-5" />
                  <div>DOS Prompt</div>
                </div>
              </Label>
            </div>

            <div>
              <RadioGroupItem
                value="synthwave"
                id="synthwave"
                className="peer sr-only"
              />
              <Label
                htmlFor="synthwave"
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
              >
                <div className="flex items-center gap-4">
                  <Sparkles className="h-5 w-5" />
                  <div>Synthwave</div>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default Settings;
