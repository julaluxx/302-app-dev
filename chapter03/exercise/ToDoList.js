import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

const ToDoList = () => {
    const [task, setTask] = useState('');
    const [toDoList, setToDoList] = useState([]);

    const addTask = () => {
        if (task.trim().length === 0) {
            Alert.alert("Caution", "Please type something!");
            return;
        }

        const newId = toDoList.length > 0 ? toDoList[toDoList.length - 1].id + 1 : 1;
        const newTask = { id: newId, text: task };

        setToDoList([...toDoList, newTask]);
        setTask('');
    };

    const deleteTask = (id) => {
        const updatedList = toDoList.filter((item) => item.id !== id);
        setToDoList(updatedList);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>ToDo List</Text>
                <Text style={styles.subtitle}>Programmer: Julalak Kinnara</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new todo..."
                    placeholderTextColor="#999"
                    value={task}
                    onChangeText={setTask}
                />
                <TouchableOpacity style={styles.addButton} onPress={addTask}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.listContainer}>
                {toDoList.map((item) => (
                    <View key={item.id} style={styles.taskItem}>
                        <Text style={styles.taskText}>{item.text}</Text>
                        <TouchableOpacity onPress={() => deleteTask(item.id)}>
                            <Text style={styles.deleteText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView >
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8F5E9',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        marginBottom: 20,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2E7D32',
    },
    subtitle: {
        fontSize: 16,
        color: '#66BB6A',
        marginTop: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 25,
        borderColor: '#C8E6C9',
        borderWidth: 1,
        fontSize: 16,
        color: '#333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    addButton: {
        width: 50,
        height: 50,
        backgroundColor: '#66BB6A',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    addButtonText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    },
    listContainer: {
        flex: 1,
    },
    taskItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderColor: '#C8E6C9',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    taskText: {
        fontSize: 16,
        color: '#555',
        maxWidth: '80%',
    },
    deleteText: {
        color: '#EF5350',
        fontWeight: 'bold',
    },
});

export default ToDoList;