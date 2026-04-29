import { useState } from 'react';
import { StyleSheet, Text, TextInput, Pressable, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  function handleGreet(): void {
    if (name.trim() === '') {
      setMessage('Introduce tu nombre');
    } else {
      setMessage(`👋 Hola, ${name}`);
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.inner}>
          <Text style={styles.title}>Saludador Expo</Text>

          <TextInput
            style={styles.input}
            placeholder="Escribe tu nombre..."
            placeholderTextColor="#aaa"
            value={name}
            onChangeText={setName}
          />

          <Pressable style={styles.button} onPress={handleGreet}>
            <Text style={styles.buttonText}>Saludar</Text>
          </Pressable>

          {message !== '' && (
            <Text style={styles.message}>{message}</Text>
          )}
        </View>

        <StatusBar style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e0e0e0',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
    paddingHorizontal: 12,
    color: '#fff',
    backgroundColor: '#16213e',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#0f3460',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#e94560',
    fontSize: 16,
    fontWeight: '600',
  },
  message: {
    marginTop: 24,
    fontSize: 20,
    color: '#e0e0e0',
  },
});
