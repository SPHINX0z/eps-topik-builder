import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eaiypixnjiwqkxaovgmn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdX...';
export const supabase = createClient(supabaseUrl, supabaseKey);

export async function uploadAudioGabungan(file, filename = file.name) {
  const { data, error } = await supabase.storage.from('audio').upload(filename, file, {
    cacheControl: '3600',
    upsert: true
  });
  if (error) {
    console.error('Upload gagal:', error);
    throw error;
  }
  const { data: publicUrlData } = supabase.storage.from('audio').getPublicUrl(filename);
  return publicUrlData.publicUrl;
}

export async function simpanSoalToDatabase(soalList) {
  const payload = soalList.map(s => ({
    nomor: s.nomor,
    pertanyaan: s.pertanyaan || '',
    opsi: s.opsi,
    gambar: s.gambar || null,
    audio: s.audio || null,
    audio_gabungan: s.audio_gabungan || null
  }));

  const { error } = await supabase.from('soal').insert(payload);
  if (error) {
    console.error('Gagal simpan ke Supabase:', error);
    alert('❌ Gagal simpan ke Supabase');
  } else {
    alert('✅ Soal berhasil disimpan ke Supabase!');
  }
}