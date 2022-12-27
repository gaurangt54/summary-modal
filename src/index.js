/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import styles from './styles.module.css'

export class SummaryModal extends Component {
  render() {
    return <div className={styles.test}>Example Component: {this.props.text}</div>
  }
}
