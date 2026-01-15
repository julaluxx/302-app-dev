import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Keyboard, StatusBar } from 'react-native';

const TransactionItem = ({ item }) => (
    <View style={styles.transactionCard}>
        <View style={styles.transactionIconContainer}>
            <Text style={styles.transactionEmoji}>{item.type === 'income' ? '💰' : '💸'}</Text>
        </View>
        <View style={styles.transactionInfo}>
            <Text style={styles.transactionTitle}>{item.title}</Text>
            <Text style={styles.transactionDate}>วันนี้</Text>
        </View>
        <Text style={[styles.transactionAmount, { color: item.type === 'income' ? '#66BB6A' : '#EF5350' }]}>
            {item.type === 'income' ? '+' : '-'}{item.amount.toFixed(2)}
        </Text>
    </View>
);

const TransactionInput = ({ title, setTitle, amount, setAmount, onAddTransaction }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="รายการ (เช่น เงินเดือน, อาหาร)"
                value={title}
                onChangeText={setTitle}
                placeholderTextColor="#FFCC80"
            />
            <TextInput
                style={styles.input}
                placeholder="จำนวนเงิน (เช่น 500)"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
                placeholderTextColor="#FFCC80"
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.incomeButton]}
                    onPress={() => onAddTransaction('income')}
                >
                    <Text style={styles.buttonText}>+ รายรับ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.expenseButton]}
                    onPress={() => onAddTransaction('expense')}
                >
                    <Text style={styles.buttonText}>- รายจ่าย</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const BalanceSummary = ({ balance, income, expense }) => {
    return (
        <View style={styles.balanceCard}>
            <Text style={styles.balanceLabel}>ยอดคงเหลือ</Text>
            <Text style={styles.balanceAmount}>฿{balance}</Text>
            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Text style={styles.statLabel}>รายรับ</Text>
                    <Text style={styles.statValueIncome}>฿{income}</Text>
                </View>
                <View style={styles.verticalLine} />
                <View style={styles.statItem}>
                    <Text style={styles.statLabel}>รายจ่าย</Text>
                    <Text style={styles.statValueExpense}>฿{expense}</Text>
                </View>
            </View>
        </View>
    );
};

const ExpenseApp = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (type) => {
        if (!title || !amount) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }

        const newTransaction = {
            id: Date.now().toString(),
            title: title,
            amount: parseFloat(amount),
            type: type,
        };

        setTransactions([newTransaction, ...transactions]);
        setTitle('');
        setAmount('');
        Keyboard.dismiss();
    };

    const calculateTotal = (type) => {
        return transactions
            .filter((item) => item.type === type)
            .reduce((acc, item) => acc + item.amount, 0)
            .toFixed(2);
    };

    const income = calculateTotal('income');
    const expense = calculateTotal('expense');
    const balance = (parseFloat(income) - parseFloat(expense)).toFixed(2);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.header}>
                <Text style={styles.appTitle}>บันทึกรายรับ-รายจ่าย</Text>
                <Text style={styles.subtitle}>Programmer: Julalak Kinnara</Text>

                <BalanceSummary balance={balance} income={income} expense={expense} />
            </View>

            <TransactionInput
                title={title}
                setTitle={setTitle}
                amount={amount}
                setAmount={setAmount}
                onAddTransaction={addTransaction}
            />

            <View style={styles.listContainer}>
                <Text style={styles.recentText}>รายการล่าสุด</Text>
                <FlatList
                    data={transactions}
                    renderItem={({ item }) => <TransactionItem item={item} />}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>ไม่มีรายการ</Text>
                    }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF3E0',
    },
    header: {
        paddingTop: 60,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
    appTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#E65100',
    },
    subtitle: {
        fontSize: 14,
        color: '#FB8C00',
        marginBottom: 20,
        fontStyle: 'italic',
    },
    balanceCard: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: "#FFB74D",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    balanceLabel: {
        fontSize: 16,
        color: '#9E9E9E',
    },
    balanceAmount: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 10,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
    statItem: {
        alignItems: 'center',
        flex: 1,
    },
    verticalLine: {
        width: 1,
        height: '100%',
        backgroundColor: '#EEEEEE',
    },
    statLabel: {
        fontSize: 12,
        color: '#9E9E9E',
        marginBottom: 5,
    },
    statValueIncome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#66BB6A',
    },
    statValueExpense: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#EF5350',
    },
    inputContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 15,
        marginBottom: 10,
        fontSize: 16,
        color: '#333',
        shadowColor: "#FFB74D",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    button: {
        flex: 1,
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    incomeButton: {
        backgroundColor: '#66BB6A',
    },
    expenseButton: {
        backgroundColor: '#EF5350',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    recentText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E65100',
        marginBottom: 10,
    },
    transactionCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#FFB74D",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    transactionIconContainer: {
        width: 45,
        height: 45,
        backgroundColor: '#FFF3E0',
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    transactionEmoji: {
        fontSize: 20,
    },
    transactionInfo: {
        flex: 1,
    },
    transactionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    transactionDate: {
        fontSize: 12,
        color: '#9E9E9E',
    },
    transactionAmount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    emptyText: {
        textAlign: 'center',
        color: '#9E9E9E',
        marginTop: 20,
    },
});

export default ExpenseApp;