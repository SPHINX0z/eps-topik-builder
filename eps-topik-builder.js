// eps-topik-builder.js import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://eaiypixnjiwqkxaovgmn.supabase.co'; const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhaXlwaXhuaml3cWt4YW92Z21uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzODkwNzIsImV4cCI6MjA2OTk2NTA3Mn0.9QexOt0Uunv_n3KFBW5RKTBr9dJTSq8k84gBk1WUr2w'; export const supabase = createClient(supabaseUrl, supabaseKey);

export async function uploadAudioGabungan(file) { const fileName = audio/audio-${Date.now()}.mp3; const { data, error } = await supabase.storage.from('media').upload(fileName, file, { cacheControl: '3600', upsert: false, contentType: 'audio/mpeg' }); if (error) { alert('❌ Gagal upload audio gabungan'); return null; } const { data: urlData } = supabase.storage.from('media').getPublicUrl(fileName); return urlData.publicUrl; }

export async function simpanSoalToDatabase(soalList, setId) { const konfirmasi = confirm(Yakin ingin menyimpan ${soalList.length} soal ke database untuk set: ${setId}?); if (!konfirmasi) return;

const soalSiap = soalList.map(s => ({ nomor: s.nomor, pertanyaan: s.pertanyaan, opsi: s.opsi, gambar: s.gambar, audio_gabungan: s.audio_gabungan || null, set_id: setId }));

const { error } = await supabase.from('soal').insert(soalSiap);

if (error) { console.error(error); alert('❌ Gagal menyimpan ke Supabase'); } else { alert('✅ Soal berhasil disimpan!'); } }

}
