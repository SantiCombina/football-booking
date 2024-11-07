import { ClockIcon } from "lucide-react" // Icono de reloj
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface TimePickerProps {
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
  occupiedTimes: string[];
}

export function TimePicker({ selectedTime, onTimeSelect, occupiedTimes }: TimePickerProps) {
  const times = [
    "16:00", "17:00", "18:00", "19:00", "20:00",
    "21:00", "22:00"
  ]

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !selectedTime && "text-muted-foreground"
          )}
        >
          <ClockIcon />
          {selectedTime ? selectedTime : <span>Pick a time</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="flex flex-col gap-1">
          {times.map((time) => (
            <Button
              key={time}
              variant={"outline"}
              className={cn(
                "w-full text-left font-normal",
                selectedTime === time && "bg-blue-500 text-white",
                occupiedTimes.includes(time) && "bg-red-500 text-white cursor-not-allowed", 
                !occupiedTimes.includes(time) && "hover:bg-gray-200" 
              )}
              onClick={() => !occupiedTimes.includes(time) && onTimeSelect(time)}
              disabled={occupiedTimes.includes(time)}
            >
              {time}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}