import { supabase } from './components/supabaseClient';


export const scheduleVisit = async (propertyId, visitDay, visitMonth, visitYear, bedrooms) => {
  const visitDate = `${visitDay}/${visitMonth}/${visitYear}`;
  const { data, error } = await supabase
    .from('reservas')
    .insert([
      {
        property_number: propertyId, 
        bedrooms: bedrooms, 
        visit_day: visitDay,
        visit_month: visitMonth,
        visit_year: visitYear,
        status: 'pendente'
      }
    ]);

  if (error) {
    console.error('Erro ao agendar visita:', error);
    return null; 
  } else {
    console.log('Visita agendada com sucesso:', data);
    return data; 
  }
};