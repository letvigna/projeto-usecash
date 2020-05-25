import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f7f9f8',
    padding: 10,
  },
  questionView: {
    flex: 1,
    //backgroundColor: '#9c8f89',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 5,
  },
  questionHeader: {
    fontSize: 18,
    color: '#ef8f5a',
    fontWeight: 'bold',
  },
  question: {
    fontSize: 15,
    color: '#514545',
    fontWeight: 'bold',
  },
  answersView: {
    flex: 4,
    justifyContent: 'center',
  },
  answerButton: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8abf84',
    borderRadius: 15,
    marginBottom: 5,
  },
  answer: {
    fontSize: 15,
    textAlign: 'center',
  },
});

export default styles;
