from qiskit.aqua.algorithms imprt Shor
from qiskit.aqua import QuantumInstance
from qiskit import Aer

key=21 #number to factor
base=2
backend=Aer.get_backend('qasm_simulator')
qi=QuantumInstance(backend=backend,shots=1824)

shors=Shor(N=key,a=base,quantum_instance=qi)
results=shors.run()
print(results['factors'])
