import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useGetField } from "@/api/queries/use-fields";
import { Calendar } from "@/components/ui/calendar";
import { TimePicker } from "@/components/time-picker";
import axios from "axios";

export function Reservation() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: fieldData, isLoading: fieldLoading, isError: fieldError } = useGetField(id);

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  useEffect(() => {
    if (!id || fieldError) {
      console.error("Error al cargar la cancha o ID inválido");
      navigate("/not-found");
    }
  }, [id, fieldError, navigate]);

  useEffect(() => {
    if (fieldLoading) {
      console.log("Cargando los detalles de la cancha...");
    } else if (fieldData) {
      console.log("Datos de la cancha cargados: ", fieldData);
    }
  }, [fieldLoading, fieldData]);

  if (!id || fieldError) {
    return null;
  }

  if (fieldLoading || !fieldData) {
    return <div>Cargando detalles de la cancha...</div>;
  }

  const handleConfirmReservation = async () => {
    if (!selectedDate || !selectedTime) {
      alert("Por favor selecciona una fecha y hora para la reserva.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/reservation/${fieldData.id}`,
        {
          date: selectedDate.toISOString().split('T')[0], 
          startTime: selectedTime,
          id_user: 2,
          id_field: id,
        }
      );
      console.log("Reserva confirmada: ", response.data);
      alert("Reserva confirmada");
      navigate("/fields");
    } catch (error) {
      console.error("Error al hacer la reserva: ", error);
      alert("Hubo un error al hacer la reserva. Intenta de nuevo.");
    }
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string | null) => {
    setSelectedTime(time);
  };

  useEffect(() => {
    console.log("Fecha seleccionada: ", selectedDate);
    console.log("Hora seleccionada: ", selectedTime);
  }, [selectedDate, selectedTime]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Reservar Canchita</h2>

      {/* Detalles de la cancha */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">{fieldData.name}</h3>
        <p className="text-gray-700">{fieldData.description}</p>
        <span className="text-sm text-gray-500">{fieldData.direction}</span>
      </div>

      <Calendar
        selected={selectedDate}
        onSelect={handleDateSelect} 
        mode="single" 
        disabled={{ before: new Date() }} 
      />

      <TimePicker
        selectedTime={selectedTime}
        onTimeSelect={handleTimeSelect} 
        occupiedTimes={[]} 
      />

      <Button
        className="mt-4 bg-blue-500 hover:bg-blue-500/90"
        onClick={handleConfirmReservation}
      >
        Confirmar Reserva
      </Button>
    </div>
  );
}
