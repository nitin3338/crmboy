import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';

const CustomInput = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View
          style={[
            styles.container,
            { borderColor: isFocused ? '#5865FF' : error ? 'red' : '#e8e8e8' },
          ]}
        >
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            onFocus={handleFocus}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
          />
        </View>

        
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  input: {},
});

export default CustomInput;
